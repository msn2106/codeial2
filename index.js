const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const app = express();
const db = require('./config/mongoose');
const PORT = 8000;

// setting up assets folder for static files.
app.use(express.static('./assets'));

// setting up express layout for base layout of all pages
app.use(expressLayouts);

// extract styles and scripts from subpages into layout
app.set('layout extractStyles', true);
app.set('layout extractScripts', true);

// use express router
app.use('/', require('./routes'));

app.use(express.urlencoded()); // for forms input
// setting up view engine
app.set('view engine', 'ejs');
app.set('views', './views');

app.listen(PORT, (error) => {
  if(error) console.error(`Server faced an error: ${JSON.stringify(error)}`);
  console.log(`Server is running on port: ${PORT}`);
});
