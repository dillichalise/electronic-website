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
    sku: {
      type: type.STRING,
      allowNull: false,
    },
    name: {
      type: type.STRING,
      allowNull: false,
    },
    categoryId: {
      type: type.INTEGER,
      allowNull: false,
    },
    description: {
      type: type.STRING,
    },
    image: {
      type: type.STRING,
    },
  });
};
