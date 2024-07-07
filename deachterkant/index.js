const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.get('/', (req, res) => {
    console.log("in backend")
  res.send('Hi');
});
app.listen(5050, (err) => {
  console.log('Listening op poort 5050');
});
