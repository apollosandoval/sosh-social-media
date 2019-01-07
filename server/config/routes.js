// import route handlers
const users = require('../controllers/users');
const conversatons = require('../controllers/conversations');
const status = require('../controllers/status')

module.exports = (app) => {

  app.get('/', (req, res) => {
    res.send('Hello World!');
  });

};