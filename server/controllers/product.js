const httpStatus = require("http-status");
const { uploadImage } = require("../utils/uploadImage");
const { getPagingData } = require("../utils/pagination");
const { getPagination } = require("../utils/pagination");
const { productRepository } = require("../repositories");
const { respond } = require("../utils/response");
const subDir = "products";

/**
 * Get all products
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
const all = async (req, res) => {
  const apiUrl = req.apiUrl;
  const { page, pageSize } = req.query;
  const { limit, offset } = getPagination(page, pageSize);
  const products = await productRepository.all(limit, offset, apiUrl);
  const response = await getPagingData(products, page, limit, offset);
  return respond(res, httpStatus.OK, "Products List", response);
};

/**
 * Get all featured products
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
const featured = async (req, res) => {
  const apiUrl = req.apiUrl;
  const products = await productRepository.featured(apiUrl);
  return respond(res, httpStatus.OK, "Featured Products List", products);
};

/**
 * Get product with provided id.
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
const find = async (req, res) => {
  const apiUrl = req.apiUrl;
  const product = await productRepository.find(req.params.id, apiUrl);
  if (!product) {
    return respond(
      res,
      httpStatus.NOT_FOUND,
      "Product with given id not found"
    );
  }
  return respond(res, httpStatus.OK, "Product ", product);
};

/**
 * Create a product
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
const store = async (req, res) => {
  const productInfo = await uploadImage(subDir, req, res);
  const product = await productRepository.store({
    name: productInfo.name,
    description: productInfo.description,
    isFeatured: productInfo.isFeatured,
    image: productInfo.file ? productInfo.file.path : "",
  });
  respond(res, httpStatus.OK, "Product  created successfully", product);
};

/**
 * Updates product  with given id
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
const update = async (req, res) => {
  const productInfo = await uploadImage(subDir, req, res);
  const product = await productRepository.find(productInfo.id);
  if (!product) {
    return respond(
      res,
      httpStatus.NOT_FOUND,
      "Could not found product  with this id"
    );
  }

  await productRepository.update(product.id, {
    name: productInfo.name,
    description: productInfo.description,
    isFeatured: productInfo.isFeatured,
    image: productInfo.file ? productInfo.file.path : "",
  });
  return respond(res, httpStatus.OK, "Product  updated successfully");
};

/**
 * Soft deletes the specified product
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
const destroy = async (req, res) => {
  const { id } = req.params;
  const product = await productRepository.find(id);
  if (!product) {
    return respond(
      res,
      httpStatus.NOT_FOUND,
      "Could not found the specified product. "
    );
  }
  await productRepository.destroy(id);
  return respond(res, httpStatus.OK, "Product  deleted successfully");
};

module.exports = {
  all,
  featured,
  find,
  store,
  update,
  destroy,
};
