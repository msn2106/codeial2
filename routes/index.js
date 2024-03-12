const express = require('express');

const router = express.Router();
const controllers = require('../controllers');

console.log(`router file called`);

router.get('/', controllers.homeController);

module.exports = router;