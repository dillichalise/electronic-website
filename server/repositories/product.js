const { Product, ProductCategory } = require("../config/database");

/**
 * Get categoryId as parameter and returns list of products with given category Id.
 * If categoryId is null, returns all list of products
 * @param categoryId
 * @returns {Promise<Model[]>}
 */
const all = async (categoryId) => {
  Product.belongsTo(ProductCategory, { foreignKey: "categoryId" });
  const searchParams = { isDeleted: false, categoryId };
  if (!categoryId) delete searchParams.categoryId;
  return Product.findAll({
    where: searchParams,
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
const find = async (id) => {
  return Product.findOne({ where: { isDeleted: false, id } });
};

const update = (id, data) => {
  return Product.update(data, { where: { id } });
};

const destroy = (id) => {
  return Product.update({ isDeleted: true }, { where: { id } });
};

module.exports = { all, find, store, update, destroy };
