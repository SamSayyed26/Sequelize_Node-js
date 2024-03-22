const { Sequelize, DataTypes } = require("sequelize");

module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define('Users', {
    id: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
      allowNull: false,
      primaryKey: true
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    isContentCreator: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    }
  });

  User.associate = (models) => {
    User.hasMany(models.Posts, { foreignKey: 'userId' });
    User.hasMany(models.Comments, { foreignKey: 'userId' });
    User.hasMany(models.Likes, { foreignKey: 'userId' })
  };
  Object.assign(User, require("../model_methods/model_methods.js"))
  return User;
}