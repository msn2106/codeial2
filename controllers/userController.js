const User = require('../models/users');

const userController = (req, res) => {
  return res.render('users', {
    title: 'Users Home Page'
  })
}

const userProfileController = async (req, res) => {
  const userCookie = req.cookies.user_id;
  let user = {};
  if (userCookie) {
    user = await User.findById(userCookie)
  } else return res.redirect('/users/sign-in');
  if (user) {
    return res.render('userProfile', {
      title: 'User Profile Page',
      user: user
    })
  } else {
    return res.redirect('/users/sign-in');
  }
  
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
const createSession = async(req, res) => {
  // find the user
  const user = await User.findOne({ email: req.body.email });
  // handle user found
  if (user) {
    // handle password which didn't match
    if (user.password != req.body.password) {
      return res.redirect('back');
    }
    // handle session creation
    res.cookie('user_id', user.id);
    return res.redirect('/users/profile');
  } else {
    // handle user not found
    return res.redirect('back');
  }
}

const destroySession = (req, res) => {
  if (req.cookies.user_id) {
    res.cookie('user_id', '');
  }
  return res.redirect('/users/sign-in');
};


module.exports = {
  userController,
  userProfileController,
  userSignUp,
  userSignIn,
  createUser,
  createSession,
  destroySession
}