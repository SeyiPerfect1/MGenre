'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
  await queryInterface.bulkInsert('Users', [{
    firstname: "Olujide",
    lastname: "Olagoke",
    username: "Olagoke04",
    mobile: "07065838473",
    email: "olagokeolujide@gmail.com",
    password: "@Oluperfect1",
    dob: "1996/11/23",
    lastlogin: "2022/10/19",
    introduction: 'I am a good boy',
    country: "Nigeria",
    userPicture: "user/users/pictures/olagoke.png",
    registeredAt: Date.now()
  }]);
  },

  async down (queryInterface, Sequelize) {
   await queryInterface.bulkDelete("Users", null, {});
  }
};