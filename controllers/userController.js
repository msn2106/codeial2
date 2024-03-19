const User = require('../models/users');

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

// render the sign up page
const userSignUp = (req, res) => {
  return res.render('user_signup', {
    title: 'Codeial | Sign Up'
  })
}

// render the sign in page
const userSignIn = (req, res) => {
  return res.render('user_signin', {
    title: 'Codeial | Sign In'
  })
}

// get the sign up data
const createUser = async (req, res) => {
  if (req.body.password != req.body.confirm_password){
    return res.redirect('back');
  }

  const user = await User.findOne({email: req.body.email});
  if(!user) {
    User.create(req.body);
    return res.redirect('/users/sign-in');
  } else return res.redirect('back');
}

// sign in and create session
const createSession = (req, res) => {
  // TODO: later
}


module.exports = {
  userController,
  userProfileController,
  userSignUp,
  userSignIn,
  createUser,
  createSession
}