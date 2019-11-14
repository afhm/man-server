const { Client } = require("pg");
const config = require("../config/config").orm.db.connection;
// const client = new Client({
//   database: config.database,
//   host: config.host,
//   port: config.port,
//   user: config.user,
//   password: config.password,
// });
const client = new Client(process.env.POSTGRES_URI);

function initConnection() {
  client
    .connect()
    .then(() => console.info("[DB]: Connected"))
    .catch(e => console.error("[DB]: connection error", e.stack));

  // eslint-disable-next-line quotes
  client.query('LISTEN "onNewUser"');

  client.query("LISTEN new_notification", (err, res) => {
    // console.log(err, res);
  });

  // const validateNotification = require('../../util/notificationService/instantNotifications');

  client.on("notification", msg => {
    const payload = JSON.parse(msg.payload);
    // console.log(payload);
    // validateNotification();
  });
}

function pgQuery(queryString, values) {
  return client.query(queryString, values);
}

module.exports = {
  pgQuery,
  initConnection,
};
