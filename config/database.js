module.exports = ({ env }) => ({
  connection: {
    client: "postgres",
    connection: {
      host: env(
        "DATABASE_HOST",
        "dpg-civ98t15rnuhcnrkm93g-a.oregon-postgres.render.com"
      ),
      port: env.int("DATABASE_PORT", 5432),
      database: env("DATABASE_NAME", "printandgraph_3pd6"),
      user: env("DATABASE_USERNAME", "root"),
      password: env("DATABASE_PASSWORD", "b9qGSkW9bz80YB2RlFkapISbiZWDYDiP"),
      ssl: env.bool("DATABASE_SSL", true),
    },
  },
});
