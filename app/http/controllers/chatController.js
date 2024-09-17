function chatController() {
  return {
    index(req, res) {
      const loggedIn = req.session.passport.user ? true : false;
      return res.render("chat", { loggedIn: loggedIn });
    },
  };
}

module.exports = chatController;
