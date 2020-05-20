import { Product } from "../types.ts";

let products: Product[] = [
  {
    id: "1",
    name: "Product One",
    description: "This is product one",
    price: 29.99,
  },
  {
    id: "2",
    name: "Product Two",
    description: "This is product two",
    price: 39.99,
  },
  {
    id: "3",
    name: "Product Three",
    description: "This is product three",
    price: 59.99,
  },
];

/**
 * @description Get all products
 * @route GET /api/v1/products
 * @param response
 */
const getProducts = ({ response }: { response: any }) => {
  response.body = {
    success: true,
    data: products,
  };
};

/**
 * @description Get one product
 * @route GET /api/v1/products/:id
 * @param response
 */
const getProduct = ({ response }: { response: any }) => {
  response.body = "get one product";
};

/**
 * @description Add product
 * @route POST /api/v1/products
 * @param response
 */
const addProduct = ({ response }: { response: any }) => {
  response.body = "add";
};

/**
 * @description Update product
 * @route UPDATE /api/v1/products/:id
 * @param response
 */
const updateProduct = ({ response }: { response: any }) => {
  response.body = "update";
};

/**
 * @description Delete product
 * @route DELETE /api/v1/products/:id
 * @param response
 */
const deleteProduct = ({ response }: { response: any }) => {
  response.body = "delete";
};

export { getProducts, getProduct, addProduct, updateProduct, deleteProduct };
