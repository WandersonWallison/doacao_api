module.exports = function (req, res, next) {

  'use strict';

  // Sockets
  if (req.isSocket) {
    if (req.session &&
      req.session.passport &&
      req.session.passport.user) {
      return next();
    }

    res.json(401);
  }
  // HTTP
  else {
    if (req.isAuthenticated()) {
      return next();
    }

    // Se você estiver usando uma interface de usuário tradicional gerada pelo servidor, remova o comentário desse código:
    res.redirect('/explore');


    // Se você estiver usando uma interface de usuário tradicional gerada pelo servidor, remova o comentário desse código:
    /*
    res.status(401);
    res.end();
    */
  }

};
