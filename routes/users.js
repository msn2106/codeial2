const express = require('express');

const router = express.Router();
const controllers = require('../controllers');

router.get('/profile', controllers.userController);

module.exports = router;