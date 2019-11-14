module.exports = {
  orm: {
    db: {
      client: "postgresql",
      connection: process.env.POSTGRES_URI,
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
};
