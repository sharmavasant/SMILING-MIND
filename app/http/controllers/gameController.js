function gameController() {
  return {
    index(req, res) {
      const loggedIn = req.session.passport.user ? true : false;
      return res.render("game", { loggedIn: loggedIn });
    },
  };
}

module.exports = gameController;
