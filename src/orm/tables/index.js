const users = require("./users");

function loadTables(orm) {
  users(orm);
}
module.exports = loadTables;
