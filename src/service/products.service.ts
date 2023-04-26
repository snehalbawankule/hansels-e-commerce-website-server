import { ProductModel } from "../models/product.model";

const getAllProduct = async (
  page: number,
  size: number,
  sortBy: any,
  sortOrder: any
) => {
  const limit = size * 1;
  const offset = (page - 1) * limit;
  const category = await ProductModel.findAll({
    nest: true,
    order: [[sortBy, sortOrder]],
    offset,
    limit,
  });
  return category;
};

const updateProduct = async (
  id: any,
  name: string,
  title: string,
  description: string,
  image: string,
  gender: string,
  brand: string,
  category: string,
  subCategory: string,
  actualPrice: number,
  discount: number
) => {
  const updatePro = await ProductModel.update(
    {
      name,
      title,
      description,
      image,
      gender,
      brand,
      category,
      subCategory,
      actualPrice,
      discount,
    },
    { where: { id } }
  );

  return updatePro;
};

const createProduct = async (
  name: string,
  title: string,
  description: string,
  image: string,
  gender: string,
  brand: string,
  category: string,
  subCategory: string,
  actualPrice: number,
  discount: number
): Promise<any> => {
  const product = await ProductModel.create({
    name,
    title,
    description,
    image,
    gender,
    brand,
    category,
    subCategory,
    actualPrice,
    discount,
  });

  return product;
};
export { getAllProduct, createProduct, updateProduct };
