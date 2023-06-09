import { SubCategoryModel } from "../models/sub-category.model";

const getAllSubCategories = async (
  page: number,
  size: number,
  sortBy: any,
  sortOrder: any
) => {
  const limit = size * 1;
  const offset = (page - 1) * limit;
  const category = await SubCategoryModel.findAll({
    nest: true,
    order: [[sortBy, sortOrder]],
    offset,
    limit,
  });
  return category;
};

const updateSubCategories = async (
  id: any,
  categoryId: string,
  name: string
) => {
  const updateCat = await SubCategoryModel.update(
    {
      categoryId,
      name,
    },
    { where: { id } }
  );

  return updateCat;
};

const createSubCategory = async (
  categoryId: string,
  name: string
): Promise<any> => {
  const category = await SubCategoryModel.create({
    categoryId,
    name,
  });

  return category;
};
export { getAllSubCategories, createSubCategory, updateSubCategories };
