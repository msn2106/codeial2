const createBlogController = (req, res) => {
  return res.end('<h1>This is create blog !!</h1>');
}

const updateBlogController = (req, res) => {
  return res.end('<h1>This is update blog !!</h1>');
}

module.exports = createBlogController;
module.exports = updateBlogController;