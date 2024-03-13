const express = require('express');

const router = express.Router();
const controllers = require('../controllers');

router.get('/create', controllers.createBlogController);
router.get('/update', controllers.updateBlogController);

module.exports = router;