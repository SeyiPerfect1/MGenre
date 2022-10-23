const express = require('express');
const userRouter = express.Router()
const { getUserByName } = require('../controllers/user')

userRouter.get("/:username", getUserByName())

module.exports = userRouter