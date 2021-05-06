const httpStatus = require("http-status");
const { categoryRepository } = require("../repositories");
const { respond } = require("../utils/response");
/**
 * Returns list of all Product Categories.
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
const all = async (req, res) => {
  const productCategories = await categoryRepository.all();
  return respond(
    res,
    httpStatus.OK,
    "Product Category List",
    productCategories
  );
};

/**
 * Get product category with provided id.
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
const find = async (req, res) => {
  const category = await categoryRepository.find(req.params.id);
  if (!category) {
    return respond(
      res,
      httpStatus.NOT_FOUND,
      "Product category with given id not found"
    );
  }
  return respond(res, httpStatus.OK, "Product Category", category);
};

/**
 * Create a product Category
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
const store = async (req, res) => {
  console.log(req.body);
  const category = await categoryRepository.store({
    name: req.body.name,
    description: req.body.description,
  });
  respond(
    res,
    httpStatus.OK,
    "Product category created successfully",
    category
  );
};

/**
 * Updates product category with given id
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
const update = async (req, res) => {
  const { id } = req.params;
  const category = await categoryRepository.find(id);
  if (!category) {
    return respond(
      res,
      httpStatus.NOT_FOUND,
      "Could not found product category with this id"
    );
  }
  await categoryRepository.update(id, {
    name: req.body.name,
    description: req.body.description,
  });
  return respond(res, httpStatus.OK, "Product Category updated successfully");
};

/**
 * Soft deletes the specified product category
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
const destroy = async (req, res) => {
  const { id } = req.params;
  const category = await categoryRepository.find(id);
  if (!category) {
    return respond(
      res,
      httpStatus.NOT_FOUND,
      "Could not found the specified product category"
    );
  }
  await categoryRepository.destroy(id);
  return respond(res, httpStatus.OK, "Product Category deleted successfully");
};

module.exports = {
  all,
  find,
  store,
  update,
  destroy,
};
