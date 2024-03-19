
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
const createUser = (req, res) => {
  // TODO: later
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