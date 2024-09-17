function dashboardController() {
  return {
    index(req, res) {
      const loggedIn = req.session.passport.user ? true : false;
      // console.log(req.session.passport.user);
      return res.render("users/dashboard", { loggedIn: loggedIn });
    },
  };
}

module.exports = dashboardController;
