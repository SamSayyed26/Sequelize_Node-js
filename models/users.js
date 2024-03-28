const { DataTypes } = require("sequelize");
const sequelize = require("../database/index");
const { trimAndLowerCase } = require("../src/shared/util")


const bcrypt = require("bcrypt");


const User = sequelize.define('Users', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    allowNull: false,
    primaryKey: true
  },
  firstName: {
    type: DataTypes.STRING,

    allowNull: false,
    set: trimAndLowerCase("firstName"),
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false,
    set: trimAndLowerCase("lastName"),
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    set: trimAndLowerCase("email"),
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  },
  role: {
    type: DataTypes.STRING,
    allowNull: false
  },
}, {
  hooks: {
    async beforeCreate(user, options) {
      user.password = await bcrypt.hash(user.password, 10);
    },
    async beforeUpdate(user, options) {
      if (user.changed("password")) {
        user.password = await bcrypt.hash(user.password, 10)
      }
    }
  }
});

User.associate = (models) => {
  User.hasMany(models.Posts, { foreignKey: 'userId' });
  User.hasMany(models.Comments, { foreignKey: 'userId' });
  User.hasMany(models.Reactions, { foreignKey: 'userId' });
}

Object.assign(User, require("../src/modules/users/services/user"));

module.exports = User;
