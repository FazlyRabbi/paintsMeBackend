
module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', 'dpg-cgc15r82qv267uaq5h90-a.singapore-postgres.render.com'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'kingdomofkush'),
      user: env('DATABASE_USERNAME', 'kingdomofkush_user'),
      password: env('DATABASE_PASSWORD', 'kingdomofkush_user'),
      ssl: env.bool('DATABASE_SSL', true),
    },
  },
});

