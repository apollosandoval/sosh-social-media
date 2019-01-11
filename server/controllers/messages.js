const knex = require('../db/knex');

module.exports = {

  getAll: (req, res) => {
    knex('messages').orderBy('created_at', 'desc')
      .then( data => {
        res.send(data)
      })
  },

  postMessage: (req, res) => {
    knex('messages').insert(req.body, '*')
      .then( data => {
        res.send(data);
      })
  }
};