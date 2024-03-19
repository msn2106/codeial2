const homeController = require('./homeController');
const {userController, userProfileController, userSignUp, userSignIn, createUser, createSession, destroySession} = require('./userController');
const {createBlogController, updateBlogController, getBlogController} = require('./blogsController');

module.exports = {
  homeController,
  userController,
  userProfileController,
  userSignUp,
  userSignIn,
  createUser,
  createSession,
  destroySession,
  createBlogController,
  updateBlogController,
  getBlogController
}