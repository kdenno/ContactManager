exports.createContacts = (req,res,next) => {
  res.json({ message: "create contacts" });
  next();
};
exports.getContacts = (req, res, next) => {
  res.json({ message: "get user contacts" });
  next();
};

exports.updateContacts = (req, res, next) => {
  res.json({ message: "update user contacts" });
  next();
};
exports.deleteContacts = (req, res, next) => {
  res.json({ message: "delete user contacts" });
  next();
};
