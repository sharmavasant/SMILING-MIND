const homeController = require("../app/http/controllers/homeController");
const dashboardController = require("../app/http/controllers/dashboardController");
const gameController = require("../app/http/controllers/gameController");
const contact = require("../app/http/controllers/contact");
const authController = require("../app/http/controllers/authController");
const testController = require("../app/http/controllers/testController");
const chatController = require("../app/http/controllers/chatController");

//middlewares
const guest = require("../app/http/middlewares/guest");
const auth = require("../app/http/middlewares/auth");

function initRoutes(app) {
  app.get("/", homeController().index);
  // app.get('/dashboard', dashboardController().index);
  app.get("/game", auth, gameController().index);
  app.get("/contact", contact().index);
  app.get("/login", authController().login);
  app.post("/login", authController().postLogin);
  app.get("/register", authController().register);
  app.post("/register", authController().postRegister);
  app.post("/logout", authController().logout);

  //user's dashboard
  app.get("/dashboard", auth, dashboardController().index);
  app.get("/test", auth, testController().index);
  app.get("/chat", auth, chatController().index);
}

module.exports = initRoutes;
