const express = require('express');

const router = express.Router();
const controllers = require('../controllers');

console.log(`router file called`);

router.get('/', controllers.homeController);
router.use('/users', require('./users'));
router.use('/blogs', require('./blogs'));

// for any further routes
// router.use('/routeName', require('./routeFilePath'))

// router.get('/profile', controllers.userController);

module.exports = router;