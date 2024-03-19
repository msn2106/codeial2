const homeController = require('./homeController');
const {userController, userProfileController, userSignUp, userSignIn, createUser, createSession} = require('./userController');
const {createBlogController, updateBlogController, getBlogController} = require('./blogsController');

module.exports = {
  homeController,
  userController,
  userProfileController,
  userSignUp,
  userSignIn,
  createUser,
  createSession,
  createBlogController,
  updateBlogController,
  getBlogController
}