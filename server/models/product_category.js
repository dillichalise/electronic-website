module.exports = (sequelize, type) => {
  return sequelize.define("product_category", {
    id: {
      type: type.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    isDeleted: {
      type: type.BOOLEAN,
      defaultValue: false,
    },
    name: {
      type: type.STRING,
    },
    description: {
      type: type.STRING,
    },
  });
};
