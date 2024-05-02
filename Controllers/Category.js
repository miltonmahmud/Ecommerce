const Category = require("../models/Category");

const createCategory = async (req, res, next) => {
  try {
    const { name, slug, parent, subcategories } = req.body;

    if (!name || !slug) {
      return res.status(400).json({ error: "Name and slug are required" });
    }

    // Check if parent field is empty or not
    const parentCategory = parent ? parent : null;

    const newCategory = new Category({ name, slug, parent: parentCategory });

    if (subcategories && subcategories.length > 0) {
      newCategory.subcategories = subcategories.map((subcat) => ({
        name: subcat.name,
        subcategoryId: subcat.subcategoryId,
      }));
    }

    // Check if the category already exists before saving
    const existingCategory = await Category.findOne({ name });
    if (existingCategory) {
      return res.status(400).json({ error: "Category already exists" });
    }

    const savedCategory = await newCategory.save();

    if (parentCategory) {
      // If the category has a parent, update the parent category's subcategories array
      const parentCategoryDoc = await Category.findById(parentCategory);
      if (!parentCategoryDoc) {
        return res.status(404).json({ error: "Parent category not found" });
      }

      parentCategoryDoc.subcategories.push({
        _id: savedCategory._id,
        name: savedCategory.name,
      });
      await parentCategoryDoc.save();
    }

    res.status(201).json(savedCategory);
  } catch (error) {
    next(error);
  }
};

const updateCategory = async (req, res, next) => {
  try {
    const { name, slug, parent, subcategories } = req.body;
    const categoryId = req.params.id;

    // Find the current category
    const category = await Category.findById(categoryId);
    if (!category) {
      return res.status(404).json({ message: "Category not found" });
    }

    // Find the current parent category
    const currentParentCategoryId = category.parent;
    const currentParentCategory = await Category.findById(
      currentParentCategoryId
    );
    if (!currentParentCategory) {
      return res
        .status(404)
        .json({ message: "Current parent category not found" });
    }

    // Remove the category from the subcategories array of the current parent category
    currentParentCategory.subcategories =
      currentParentCategory.subcategories.filter(
        (subcat) => subcat._id.toString() !== categoryId
      );
    await currentParentCategory.save();

    // Update the category with new data
    category.name = name;
    category.slug = slug;
    category.parent = parent;

    // Find the new parent category (if any)
    if (parent) {
      const newParentCategory = await Category.findById(parent);
      if (!newParentCategory) {
        return res
          .status(404)
          .json({ message: "New parent category not found" });
      }
      // Add the category to the subcategories array of the new parent category
      newParentCategory.subcategories.push({
        _id: category._id,
        name: category.name,
      });
      await newParentCategory.save();
    }

    // Save the updated category
    await category.save();

    res.status(200).json({ message: "Category updated successfully" });
  } catch (err) {
    next(err);
  }
};

const deleteCategory = async (req, res, next) => {
  try {
    await Category.findByIdAndDelete(req.params.id);
    res.status(200).json("category has been deleted.");
  } catch (err) {
    next(err);
  }
};

const getCategory = async (req, res, next) => {
  try {
    const category = await Category.findById(req.params.id);
    res.status(200).json(category);
  } catch (err) {
    next(err);
  }
};

const getCategories = async (req, res, next) => {
  try {
    const categories = await Category.find().populate("parent", "name");
    res.status(200).json(categories);
  } catch (err) {
    next(err);
  }
};

const getSubcategories = async (req, res) => {
  const categoryId = req.params.id; // Assuming id is the parameter name for the category ID

  try {
    const category = await Category.findById(categoryId);
    if (!category) {
      return res.status(404).json({ message: "Category not found" });
    }

    const subcategories = category.subcategories;
    res.status(200).json(subcategories);
  } catch (error) {
    console.error("Error fetching subcategories:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = {
  createCategory,
  updateCategory,
  deleteCategory,
  getCategory,
  getCategories,
  getSubcategories,
};
