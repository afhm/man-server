module.exports = {
  db: {
    client: "postgresql",
    connection: {
      database: "man_dev",
      host: "localhost",
      port: 5432,
      user: "postgres",
      password: "123",
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: "knex_migrations",
  },
  // redis config is optional, is used for caching by tabel
  redis: {
    host: "localhost",
    port: "6379",
    keyPrefix: "dev.api.",
  },
};
