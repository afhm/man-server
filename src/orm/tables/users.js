function loadTables(orm) {
  orm.defineTable({
    name: "users",
    props: {
      // timestamps: true,
    },
  });
}

module.exports = loadTables;
