module.exports = {
  // server: {
  //   host: "0.0.0.0",
  //   port: 3000,
  //   env: "development",
  //   baseUrl: "http://localhost:3000/api/v1/",
  //   baseFolder: require("./config.debug")._BASE_FOLDER,
  // },

  client: {
    host: "localhost:3000",
    referer: [
      "http://localhost:4200/",
      "http://localhost:4300/",
      "http://192.168.43.163:4200/",
      "http://192.168.2.6:4200/",
      "http://169.254.30.4:4200/",
    ],
  },

  api: {
    version: "1",
  },

  orm: {
    db: {
      client: "postgresql",
      connection: {
        database: "man_dev",
        host: "localhost",
        port: 5432,
        user: "postgres",
        password: 123,
      },
      pool: {
        min: 2,
        max: 10,
      },
      migrations: "knex_migrations",
    }, // redis config is optional, is used for caching by tabel
    redis: {
      host: "localhost",
      port: "6379",
      keyPrefix: "tga.api.",
    },
  },

  mongo_db: {
    _url: "mongodb://localhost:27017/tga",
  },
};
