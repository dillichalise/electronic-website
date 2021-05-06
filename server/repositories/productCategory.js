const { ProductCategory } = require("../config/database");

const all = async () => {
  return ProductCategory.findAll({
    where: { isDeleted: false },
  });
};

const store = async (data) => {
  return ProductCategory.create(data);
};

const find = async (id) => {
  return ProductCategory.findOne({ where: { isDeleted: false, id } });
};

const update = (id, data) => {
  return ProductCategory.update(data, { where: { id } });
};

const destroy = (id) => {
  return ProductCategory.update({ isDeleted: true }, { where: { id } });
};

module.exports = { all, find, store, update, destroy };
