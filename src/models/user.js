"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      firstname: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      lastname: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          len: [2, 15],
          msg: "username must be longer than 2 and less than 15"
        }
      },
      mobile: {
        type: DataTypes.STRING,
        unique: true,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: true
        }
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          is: /^(?=.*\d)(?=.*[a-zA-Z])(?=.*[A-Z])(?=.*[-\`\~\!\@\#\$\%\^\&\*\(\)\_\+\=\|\?\>\<\/\[\]\{\}\\\:\;\'\"\.\,])(?=.*[a-zA-Z]).{8,32}$/,
          msg: "password must be at least 8 - 32 characters, must contain at least 1 uppercase letter, must contain at least 1 lowercase letter, and 1 number, can contain any of the special characters"
        }
      },
      dob: {
        type: DataTypes.DATE,
        allowNull: false,
        validate: {
          isBefore: Date.now(),
          msg: "Date of birth must not be later than today's date"
        }
      },
      lastLogin: {
        type: DataTypes.DATE,
      },
      introduction: {
        type: DataTypes.TEXT("tiny"),
      },
      country: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      userPicture: {
        type: DataTypes.TEXT("tiny"),
      },
      registeredAt: {
        type: DataTypes.DATE
      }
    },
    {
      sequelize,
      modelName: "User",
    }
  );
  return User;
};
