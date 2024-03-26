const { DataTypes } = require("sequelize");
const sequelize = require("../database/index");

const User = sequelize.define('Users', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
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
  User.hasMany(models.Reactions, { foreignKey: 'userId' });
}

Object.assign(User, require("../src/modules/users/services/user"));

module.exports = User;
