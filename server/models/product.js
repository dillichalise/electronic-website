module.exports = (sequelize, type) => {
  return sequelize.define("product", {
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
      allowNull: false,
    },
    description: {
      type: type.STRING,
    },
    categoryId: {
      type: type.INTEGER,
      allowNull: false,
      references: {
        model: "product_categories",
        key: "id",
      },
    },
    image: {
      type: type.STRING,
    },
  });
};
