// import route handlers
const users = require('../controllers/users');
const messages = require('../controllers/messages');
const status = require('../controllers/status')

module.exports = (app) => {

  // routes for users
  app.get('/users', users.getAll);
  app.get('/users/:id', users.getById);

  // routes for messages
  app.get('/messages', messages.getAll);
  app.post('/messages/:user_id', messages.postMessage);

  // routes for statuses
  app.get('/statuses', status.getAll);
  app.post('/statuses/:user_id', status.postStatus);

};