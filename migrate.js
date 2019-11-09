const migrate = require("tabel/lib/migrate");
const config = require("./src/config/config.js").orm;

migrate(config);
