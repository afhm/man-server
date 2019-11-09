function up(knex) {
  return knex.schema.createTable("users", t => {
    t.uuid("id").primary();
    t.text("username").unique();
    t.text("email").unique();
    t.text("hashed_password");
    t.timestamps();
  });
}

function down(knex) {
  return knex.schema.dropTable("users");
}

module.exports = {
  up,
  down,
};
