const knex = require('../db/knex');

module.exports = {

  getAll: (req, res) => {
    knex('statuses').orderBy('created_at', 'desc')
      .then(data => {
        res.send(data);
      })
  },

  postStatus: (req, res) => {
    // .insert(data, [returning]) - inserts and returns all columns of new row using '*'
    knex('statuses').insert(req.body, '*')
      .then( data => {
        res.send(data);
      })
  }
};