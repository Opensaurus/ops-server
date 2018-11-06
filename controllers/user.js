const mongoose = require('mongoose');
const User = mongoose.model('users');
const requireLogin = require('../middlewares/requireLogin');

module.exports = app => {
  app.put('/api/user/:id', requireLogin, async (req, res, next) => {
    const userId = req.params.id;
    const props = req.body;

    const updatedUser = await User.findByIdAndUpdate(userId, props, {
      new: true
    });

    res.send(updatedUser);
  });
};
