const homeController = require('./homeController');
const {userController, userProfileController} = require('./userController');
const {createBlogController, updateBlogController, getBlogController} = require('./blogsController');

module.exports = {
  homeController,
  userController,
  userProfileController,
  createBlogController,
  updateBlogController,
  getBlogController
}