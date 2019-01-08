const express = require('express');
// parses incoming request bodies and makes them available under `req.body`
const bodyParser = require('body-parser');
// enables Cross-Origin Resource Sharing for AJAX requests from foreign hosts
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 8082;

// express middleware
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// makes routes available to express app
var routes_setter = require('./config/routes.js');
routes_setter(app);

app.listen(PORT, function(err) {
  if (err) {
    throw new Error('Server failed to start correctly: ', err);
  }
  console.log('Server listening on port:', PORT);
});