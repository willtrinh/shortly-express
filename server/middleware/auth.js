const models = require('../models');
const Promise = require('bluebird');

module.exports.createSession = (req, res, next) => {
  // if it has a cookie, check if the session is valid
  Promise.resolve(req.cookies.shortlyid)
    .then((hash) => {
      if (!hash) {
        throw hash;
      }
      return models.Sessions.get({hash});
    })
    // if no session assigned to the cookie
    .tap((session) => {
      if (!session) {
        throw session;
      }
    })
    // if no cookies on the request, initialize new session
    .catch(() => {
      return models.Sessions.create()
        .then((results) => {
          return models.Sessions.get({id: results.insertId}); // id: results.id, session.id: results.id
        })
        // set a new cookie on the response when session is initialized
        .tap((session) => {
          res.cookie('shortlyid', session.hash);
        });
    })
    .then((session) => {
      req.session = session;
      next();
    });
};

/************************************************************/
// Add additional authentication middleware functions below
/************************************************************/

module.exports.verifySession = (req, res, next) => {
  if (!models.Sessions.isLoggedIn(req.session)) {
    res.redirect('/login');
  } else {
    next();
  }
};
