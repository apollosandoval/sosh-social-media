const knex = require('../db/knex');

module.exports = {

  getAll: (req, res) => {
    knex('users')
      .then(data => {
        res.send(data);
      })
  },

  getById: (req, res) => {
    knex('users').where('id', req.params.id)
      .then(data => {
        res.send(data);
      })
  },

  updateUser: (req, res) => {
    knex('users').where('id', 1).update(req.body, '*')
      .then( data => {
        res.send(data);
      })
  }

};