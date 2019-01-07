// import route handlers
const users = require('../controllers/users');
const messages = require('../controllers/messages');
const status = require('../controllers/status')

module.exports = (app) => {

  app.get('/', (req, res) => {
    res.send('Hello World!');
  });

};