const express = require('express');

const router = express.Router();
const controllers = require('../controllers');

router.get('/', controllers.userController);
router.get('/profile', controllers.userProfileController);

module.exports = router;