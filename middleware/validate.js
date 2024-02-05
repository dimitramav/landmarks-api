exports.validateAge = (req, res, next) => {
  if (req.body.age < 18) {
    return res.status(500).json({ message: "User must be over 18!" });
  }
  next();
};
