const knex = require('../db/knex');

module.exports = {

  getAll: (req, res) => {
    knex('messages')
      .then( data => {
        res.send(data)
      })
  }
};