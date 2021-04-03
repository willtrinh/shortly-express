const models = require('../models');
const Promise = require('bluebird');

module.exports.createSession = (req, res, next) => {
  // req.cookies is an object that contains cookie objects
  // we want to see if that req.cookies object contains the specific cookie object we want
  // we can check if the cookie object exists within the req.cookies object by checking the key and values

  // to check if the right cookie key exists, use Object.keys with .includes
  // to check if the right cookie value exists, check req.cookies[whatever cookie] === what we expect
  // Object.keys(req.headers.cookie.includes(req.cookies));
  //   return new Promise((resolve, reject) => {
  //     if (req.cookies.shortlyid) {

  //     } else {

  //     }
  //   });

  // if it has a cookie, check if the session is valid
  // if (req.cookies) {

  // } else { // if no cookies on the request, initialize new session
  //   models.Session.create()
  //   .then((results) => {
  //     console.log(results);
  //     return models.Session.
  //   })
  // }

};

/************************************************************/
// Add additional authentication middleware functions below
/************************************************************/
// req.cookies {
//   shortlyid: '18ea4fb6ab3178092ce936c591ddbb90c99c9f66',
//   otherCookie: '2a990382005bcc8b968f2b18f8f7ea490e990e78',
//   anotherCookie: '8a864482005bcc8b968f2b18f8f7ea490e577b20'
// }