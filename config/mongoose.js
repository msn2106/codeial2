const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1/codeial2_development');

const db = mongoose.connection;

db.on('error', (err) => { console.error.bind(`Error  connecting to the database: ${err}`); });

db.once('open', () => {
  console.log(`connection to the database is opened`);
});

module.exports = db;