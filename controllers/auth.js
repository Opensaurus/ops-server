const passport = require('passport');

module.exports = app => {
  app.get(
    '/auth/google',
    passport.authenticate('google', {
      scope: ['profile', 'email']
    })
  );

  app.get(
    '/auth/google/callback',
    passport.authenticate('google'),
    (req, res) => {
      res.redirect('/dashboard');
      // req.user.registration
      //   ? res.redirect('/dashboard')
      //   : res.redirect('/register');
    }
  );

  app.get('/api/logout', (req, res) => {
    req.logout();
    res.redirect('/login');
  });

  app.get('/api/current_user', (req, res) => {
    res.send(req.user);
  });
};
