module.exports = {
  orm: {
    db: {
      client: "postgresql",
      connection: {
        database: process.env.POSTGRES_DB,
        host: process.env.POSTGRES_HOST,
        port: process.env.POSTGRES_PORT,
        user: process.env.POSTGRES_USER,
        password: process.env.POSTGRES_PASSWORD,
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
};
