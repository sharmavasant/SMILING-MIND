function homeController() {
  return {
    index(req, res) {
      const loggedIn =
        req.session.passport && req.session.passport.user ? true : false;
      // console.log(req.session.passport.user);
      return res.render("home", { loggedIn: loggedIn });
    },
  };
}

module.exports = homeController;
