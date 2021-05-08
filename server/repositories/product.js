const sequelize = require("sequelize");
const { Product, ProductCategory } = require("../config/database");

/**
 * Get categoryId as parameter and returns list of products with given category Id.
 * If categoryId is null, returns all list of products
 * @returns {Promise<Model[]>}
 * @param limit
 * @param offset
 */
const all = async (limit, offset, apiUrl) => {
  Product.belongsTo(ProductCategory, { foreignKey: "categoryId" });
  const searchParams = { isDeleted: false };
  return Product.findAndCountAll({
    where: searchParams,
    attributes: [
      "id",
      "name",
      "description",
      "categoryId",
      "isFeatured",
      "createdAt",
      [sequelize.fn("concat", apiUrl, sequelize.col("image")), "image"],
    ],
    limit,
    offset,
    include: [
      {
        model: ProductCategory,
        attributes: ["name"],
      },
    ],
  });
};

const featured = async (apiUrl) => {
  Product.belongsTo(ProductCategory, { foreignKey: "categoryId" });
  const searchParams = { isDeleted: false, isFeatured: true };
  return Product.findAll({
    where: searchParams,
    attributes: [
      "id",
      "name",
      "description",
      "categoryId",
      "isFeatured",
      "createdAt",
      [sequelize.fn("concat", apiUrl, sequelize.col("image")), "image"],
    ],
    include: [
      {
        model: ProductCategory,
        attributes: ["name"],
      },
    ],
  });
};

const store = async (data) => {
  return Product.create(data);
};
const find = async (id, apiUrl) => {
  return Product.findOne({
    where: { isDeleted: false, id },
    attributes: [
      "id",
      "name",
      "description",
      "categoryId",
      "isFeatured",
      "createdAt",
      [sequelize.fn("concat", apiUrl, sequelize.col("image")), "image"],
    ],
  });
};

const update = (id, data) => {
  return Product.update(data, { where: { id } });
};

const destroy = (id) => {
  return Product.update({ isDeleted: true }, { where: { id } });
};

module.exports = { all, featured, find, store, update, destroy };
