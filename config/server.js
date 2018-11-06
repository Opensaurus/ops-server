const cookieSession = require('cookie-session');
const passport = require('passport');
require('../services/passport');

module.exports = (app, key) => {
  // Cookie Session
  app.use(
    cookieSession({
      maxAge: 30 * 24 * 60 * 60 * 1000,
      keys: [key]
    })
  );

  // Passport
  app.use(passport.initialize());
  app.use(passport.session());
};
