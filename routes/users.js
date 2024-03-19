const express = require('express');

const router = express.Router();
const controllers = require('../controllers');

router.get('/', controllers.userController);
router.get('/profile', controllers.userProfileController);

router.get('/sign-up', controllers.userSignUp);
router.get('/sign-in', controllers.userSignIn);

router.post('/create', controllers.createUser);
router.post('/create-session', controllers.createSession);

module.exports = router;