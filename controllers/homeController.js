
const homeController = (req, res) => {
  return res.render('home', {
    title: 'Home Page'
  })
}

module.exports = homeController;