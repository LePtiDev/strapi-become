module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '1768d7af8dc8e1a8a73f7182459c7efa'),
  },
});
