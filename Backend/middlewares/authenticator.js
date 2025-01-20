const jwt = require("jsonwebtoken");

function authenticator(req, res, next) {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).send({
      message: "Authorization token is required",
      status: 0,
    });
  }
  const rawToken = token.split(" ")[1];
  jwt.verify(rawToken, "saurabh", (err, decoded) => {
    if (err) 
      return res.status(401).send({
        message: "Invalid token. Please login again.inside jwt verify",
        status: 2,
      });


    if (decoded) {
      req.body.user = decoded.userId;
      next(); 
    }
    else{
        res.send({
            message: "Token is not valid please login again bottom",
            status: 2
        })
    }
  });
}

module.exports = {
  authenticator,
};
