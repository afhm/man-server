function up(knex) {
  return knex.schema.createTable("users", t => {
    t.increments("id").primary();
    t.text("username").unique();
    t.text("email").unique();
    t.text("password");
    // t.timestamps();
  });
}

function down(knex) {
  return knex.schema.dropTable("users");
}

module.exports = {
  up,
  down,
};
