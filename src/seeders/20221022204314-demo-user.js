'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
  await queryInterface.bulkInsert('Users', [{
    firstname: "Oluseyi",
    lastname: "Adeegbe",
    username: "Oluperfect1",
    mobile: "07067729339",
    email: "adeegbeoluseyi@gmail.com",
    password: "@Oluperfect1",
    dob: "1996/11/23",
    lastlogin: "2022/10/20",
    introduction: 'I am a good boy',
    country: "Nigeria",
    userPicture: "user/users/pictures/oluseyi.png",
    registeredAt: new Date()
  }]);
  },

  async down (queryInterface, Sequelize) {
   await queryInterface.bulkDelete("Users", null, {});
  }
};
