const db = require("../models");

const User = db.user

async function getUserByName (req, res, next) {
  const username = req.params.username;
  try {
    const user = await User.findOne({ where: { username: username } });
    console.log(user)
    res.status(200).json({
      username: user.username,
      firstname: user.firstname,
      lastname: user.lastname,
      lastlogin: user.lastlogin,
      country: user.country,
      introduction: user.introduction,
      userPicture: user.userPicture,
    });
  } catch (error) {
    res.json({
      message: error,
    });
    next(error);
  }
};

module.exports = {
    getUserByName
}
