import { server } from "../../config/server";
const productUrl = "/products";
const featuredProductUrl = "/featured-products";

export const addProduct = async (data) => {
  return server
    .post(productUrl, data)
    .then((res) => res.data)
    .catch((err) => {
      return err.response.data;
    });
};

export const getProducts = async (params) => {
  return server
    .get(`${productUrl}`, { params })
    .then((res) => res.data)
    .catch((err) => {
      return err.response.data;
    });
};

export const getFeaturedProducts = async () => {
  return server
    .get(`${featuredProductUrl}`)
    .then((res) => res.data)
    .catch((err) => {
      return err.response.data;
    });
};

export const getProduct = async (id) => {
  return server
    .get(`${productUrl}/${id}`)
    .then((res) => res.data)
    .catch((err) => {
      return err.response.data;
    });
};

export const updateProduct = async (data) => {
  return server
    .put(`${productUrl}`, data)
    .then((res) => res.data)
    .catch((err) => {
      return err.response.data;
    });
};
export const deleteProduct = async (id) => {
  return server
    .delete(`${productUrl}/${id}`)
    .then((res) => res.data)
    .catch((err) => {
      return err.response.data;
    });
};
