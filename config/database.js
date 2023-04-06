module.exports = ({ env }) => ({
  connection: {
    client: "postgres",
    connection: {
      host: env("DATABASE_HOST", "containers-us-west-172.railway.app"),
      port: env.int("DATABASE_PORT", 8014),
      database: env("DATABASE_NAME", "railway"),
      user: env("DATABASE_USERNAME", "postgres"),
      password: env("DATABASE_PASSWORD", "EJ3hXj5LHoInsOna1UKa"),
      ssl: env.bool("DATABASE_SSL", true),
    },
  },
});
