const express = require('express');

const app = express();

const PORT = 8000;

app.listen(PORT, (error) => {
  if(error) console.error(`Server faced an error: ${JSON.stringify(error)}`);
  console.log(`Server is running on port: ${PORT}`);
});
