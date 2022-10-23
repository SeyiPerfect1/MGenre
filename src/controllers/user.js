const db = require("../models");

const User = db.user

async function getUserByName (req, res) {
  const { username } = req.query;
  try {
    console.log('im here')
    const user = await User.findOne({ where: { username: username } });
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
    res.status(400).json({
      message: error,
    });
    next(error);
  }
};

module.exports = {
    getUserByName
}
