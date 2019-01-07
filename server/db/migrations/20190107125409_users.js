
exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', table => {
    table.increments();
    table.string('name');
    table.string('email');
    table.text('bio');
    table.string('profilePhotoURL');
    table.string('location');
    table.datetime('created_at').defaultTo(knex.fn.now(0));
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users');
};
