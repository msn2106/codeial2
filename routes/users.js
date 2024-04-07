const express = require('express');
const passport = require('passport');
const router = express.Router();

const controllers = require('../controllers');

router.get('/', controllers.userController);
router.get('/profile', passport.checkAuthentication, controllers.userProfileController);

router.get('/sign-up', controllers.userSignUp);
router.get('/sign-in', controllers.userSignIn);

router.post('/create', controllers.createUser);

// use passport as a middleware to authenticate
router.post('/create-session', passport.authenticate(
    'local',
    {failureRedirect: '/users/sign-in'},
), controllers.createSession);


router.get('/sign-out', controllers.destroySession);

module.exports = router;