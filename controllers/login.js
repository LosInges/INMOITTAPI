const login = (req, res) => {
  if (!req.session.email) {
    req.session.email = req.body.email;
  }
  res.header('Access-Control-Allow-Origin', '*').json({ session: req.session });
};

const logout = (req, res) => {
  req.session.destroy();
  res.header('Access-Control-Allow-Origin', '*').json({ session: false });
};
