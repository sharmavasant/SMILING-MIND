function testController() {
  return {
    index(req, res) {
      const loggedIn = req.session.passport.user ? true : false;
      return res.render("test", { loggedIn: loggedIn });
    },
  };
}

module.exports = testController;
