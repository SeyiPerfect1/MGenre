"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
      await queryInterface.changeColumn("Users", "id", {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
      }),
      await queryInterface.changeColumn("Users", "firstName", {
        type: Sequelize.STRING,
        allowNull: false,
      }),
      await queryInterface.changeColumn("Users", "lastname", {
        type: Sequelize.STRING,
        allowNull: false,
      }),
      await queryInterface.addColumn("Users", "username", {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
        validate: {
          len: [2, 15],
          msg: "ussername must be longer than 2 and less than 15"
        }
      }),
      await queryInterface.addColumn("Users", "mobile", {
        type: Sequelize.STRING,
        unique: true,
      }),
      await queryInterface.addColumn("Users", "email", {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: true
        }
      }),
      await queryInterface.addColumn("Users", "password", {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          is: /^(?=.*\d)(?=.*[a-zA-Z])(?=.*[A-Z])(?=.*[-\`\~\!\@\#\$\%\^\&\*\(\)\_\+\=\|\?\>\<\/\[\]\{\}\\\:\;\'\"\.\,])(?=.*[a-zA-Z]).{8,32}$/,
          msg: "password must be at least 8 - 32 characters, must contain at least 1 uppercase letter, must contain at least 1 lowercase letter, and 1 number, can contain any of the special characters"
        }
      }),
      await queryInterface.addColumn("Users", "dob", {
        type: Sequelize.DATE,
        allowNull: false,
        validate: {
          isBefore: Date.now(),
          msg: "Date of birth must not be later than today's date"
        }
      }),
      await queryInterface.addColumn("Users", "lastLogin", {
        type: Sequelize.DATE,
      }),
      await queryInterface.addColumn("Users", "introduction", {
        type: Sequelize.TEXT("tiny"),
      }),
      await queryInterface.addColumn("Users", "country", {
        type: Sequelize.STRING,
        allowNull: false,
      }),
      await queryInterface.addColumn("Users", "userPicture", {
        type: Sequelize.TEXT("tiny"),
      }),
      await queryInterface.renameColumn("Users", "createdAt", "registeredAt", {
        type: Sequelize.DATE,
      }),
      await queryInterface.removeColumn("Users", "updatedAt")
      
  },

  async down(queryInterface, Sequelize) {
    await await queryInterface.removeColumn("Users", 'username');
    await await queryInterface.removeColumn("Users", 'mobile');
    await await queryInterface.removeColumn("Users", 'email');
    await await queryInterface.removeColumn("Users", 'password');
    await await queryInterface.removeColumn("Users", 'dob');
    await await queryInterface.removeColumn("Users", 'lastlogin');
    await await queryInterface.removeColumn("Users", 'introduction');
    await await queryInterface.removeColumn("Users", 'country');
    await await queryInterface.removeColumn("Users", 'userPicture');
    await await queryInterface.renameColumn("Users", "registerdAt", "cratedAt");
    await await queryInterface.addColumn("Users", 'updatedAt');
  },
};
