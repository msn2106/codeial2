const createBlogController = (req, res) => {
  return res.end('<h1>This is create blog !!</h1>');
}

const updateBlogController = (req, res) => {
  return res.end('<h1>This is update blog !!</h1>');
}

const getBlogController = (req, res) => {
  return res.render('blogsHome', {
    title: 'Blogs Home Page'
  })
}

module.exports = {
  createBlogController,
  updateBlogController,
  getBlogController
}