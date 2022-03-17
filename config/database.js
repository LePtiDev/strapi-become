module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', 'ec2-34-255-225-151.eu-west-1.compute.amazonaws.com'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'd2n8ueho03g2qo'),
      user: env('DATABASE_USERNAME', 'frzdwxcubgokmz'),
      password: env('DATABASE_PASSWORD', '6fae4da010f2e87bffc8b30690062d8d4fbdf2068921e6c5545c521197650b14'),
      ssl: env.bool('DATABASE_SSL', true),
    },
  },
});
