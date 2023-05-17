import {
  getAllProduct,
  createProduct,
  updateProduct,
  getCategoryProduct,
  getSearchedProduct,
} from "../service/products.service";

const getAllProducts = async (req: any, res: any, next: any) => {
  getAllProduct(req.query.page, req.query.size, req.query.sort, req.query.order)
    .then((result) => {
      res.json(result);
      next;
    })
    .catch((err) => {
      res.json({ err }).status(500);
    });
};

const getCategoryProducts = async (req: any, res: any, next: any) => {
  getCategoryProduct(
    req.query.page,
    req.query.size,
    req.query.sort,
    req.query.order,
    req.query.category
  )
    .then((result) => {
      res.json(result);
      next;
    })
    .catch((err) => {
      res.json({ err }).status(500);
    });
};
const getSearchProducts = async (req: any, res: any, next: any) => {
  getSearchedProduct(req.query.size, req.query.q)
    .then((result) => {
      res.json(result);
      next;
    })
    .catch((err) => {
      res.json({ err }).status(500);
    });
};

const addProduct = async (req: any, res: any) => {
  try {
    const {
      name,
      title,
      description,
      image,
      gender,
      brand,
      category,
      subCategory,
      sub_subCategory,
      actualPrice,
      discount,
    } = req.body;
    const Category = await createProduct(
      name,
      title,
      description,
      image,
      gender,
      brand,
      category,
      subCategory,
      sub_subCategory,
      actualPrice,
      discount
    );
    return res.json(Category);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

const updateProducts = async (req: any, res: any) => {
  try {
    const {
      id,
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
    } = req.body;
    const result = await updateProduct(
      id,
      name,
      title,
      description,
      image,
      gender,
      brand,
      category,
      subCategory,
      actualPrice,
      discount
    );
    return res.json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

export {
  getAllProducts,
  getCategoryProducts,
  addProduct,
  getSearchProducts,
  updateProducts,
};
