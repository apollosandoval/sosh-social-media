
exports.up = function(knex, Promise) {
  return knex.schema.createTable('statuses', table => {
    table.increments();
    table.integer('user_id')
      .notNullable()
      .references('id')
      .inTable('users')
      .onDelete('CASCADE')
      .index();
    table.text('status');
    table.string('img_url');
    table.datetime('created_at').defaultTo(knex.fn.now(0));
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('statuses');
};
