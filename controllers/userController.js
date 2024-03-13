
const userController = (req, res) => {
  return res.render('users', {
    title: 'Users Home Page'
  })
}

const userProfileController = (req, res) => {
  return res.render('userProfile', {
    title: 'User Profile Page'
  })
}


module.exports = {
  userController,
  userProfileController
}