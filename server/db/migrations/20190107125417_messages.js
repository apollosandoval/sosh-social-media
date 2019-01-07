
exports.up = function(knex, Promise) {
  return knex.schema.createTable('messages', table => {
    table.increments();
    table.integer('from_user_id')
      .notNullable()
      .references('id')
      .inTable('users')
      .onDelete('CASCADE')
      .index();
    table.integer('to_user_id')
      .notNullable()
      .references('id')
      .inTable('users')
      .onDelete('CASCADE')
      .index();
    table.text('subject');
    table.text('body');
    table.datetime('created_at').defaultTo(knex.fn.now(0));
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('messages');
};
