const parseCookies = (req, res, next) => {
  // req.headers.cookie is a string separated by semicolons
  // split cookie string by semicolon, which gives an array of cookie tuples
  // split cookie tuples by =
  var cookiesObj = {};
  if (req.headers.cookie) {
    var cookies = req.headers.cookie.split('; ');
    cookies.forEach((cookie) => {
      var tuples = cookie.split('=');
      cookiesObj[tuples[0]] = tuples[1];
    });
  }
  // assign cookiesObj to cookies property on the request
  req.cookies = cookiesObj;
  next();
  return;
};

module.exports = parseCookies;