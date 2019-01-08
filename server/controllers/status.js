const knex = require('../db/knex');

module.exports = {

  getAll: (req, res) => {
    knex('statuses')
      .then(data => {
        res.send(data);
      })
  }
};