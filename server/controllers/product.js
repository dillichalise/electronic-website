const httpStatus = require("http-status");
const { getPagingData } = require("../utils/pagination");
const { getPagination } = require("../utils/pagination");
const { productRepository } = require("../repositories");
const { respond } = require("../utils/response");

/**
 * Get all products
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
const all = async (req, res) => {
  const { page, pageSize } = req.query;
  const { limit, offset } = getPagination(page, pageSize);
  const products = await productRepository.all(limit, offset);
  const response = await getPagingData(products, page, limit, offset);
  return respond(res, httpStatus.OK, "Products List", response);
};

/**
 * Get product with provided id.
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
const find = async (req, res) => {
  const product = await productRepository.find(req.params.id);
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
  const product = await productRepository.store({
    name: req.body.name,
    description: req.body.description,
    categoryId: req.body.categoryId,
    image: req.body.image,
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
  const { id } = req.params;
  const product = await productRepository.find(id);
  if (!product) {
    return respond(
      res,
      httpStatus.NOT_FOUND,
      "Could not found product  with this id"
    );
  }
  await productRepository.update(id, {
    name: req.body.name,
    description: req.body.description,
    categoryId: req.body.categoryId,
    image: req.body.image,
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
  find,
  store,
  update,
  destroy,
};
