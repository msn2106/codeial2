const express = require('express');

const app = express();

const PORT = 8000;

// use express router
app.use('/', require('./routes'));

// setting up view engine
app.set('view engine', 'ejs');
app.set('views', './views');

app.listen(PORT, (error) => {
  if(error) console.error(`Server faced an error: ${JSON.stringify(error)}`);
  console.log(`Server is running on port: ${PORT}`);
});
