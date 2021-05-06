module.exports = (sequelize, type) => {
  return sequelize.define("user", {
    id: {
      type: type.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    isActive: {
      type: type.BOOLEAN,
      defaultValue: true,
    },
    isDeleted: {
      type: type.BOOLEAN,
      defaultValue: false,
    },
    email: {
      type: type.STRING,
      unique: true,
      allowNull: false,
    },
    password: {
      type: type.STRING,
    },
    fullName: {
      type: type.STRING,
      allowNull: false,
    },
    phoneNumber: {
      type: type.STRING,
      allowNull: false,
    },
  });
};
