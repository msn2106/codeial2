const express = require('express');

const router = express.Router();
const controllers = require('../controllers');

router.get('/', controllers.getBlogController);
router.put('/create', controllers.createBlogController);
router.post('/update', controllers.updateBlogController);

module.exports = router;