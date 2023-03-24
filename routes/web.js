const homeController = require('../app/http/controllers/homeController');
const dashboardController = require('../app/http/controllers/dashboardController');
const gameController = require('../app/http/controllers/gameController');
const contact = require('../app/http/controllers/contact');
const authController = require('../app/http/controllers/authController');

//middlewares
const guest = require('../app/http/middlewares/guest')
const auth = require('../app/http/middlewares/auth')

function initRoutes(app) {
    app.get('/', homeController().index);
   // app.get('/dashboard', dashboardController().index);
    app.get('/game', auth, gameController().index);
    app.get('/contact', contact().index);
    app.get('/login', guest, authController().login);
    app.post('/login', authController().postLogin);
    app.get('/register', guest, authController().register);
    app.post('/register', authController().postRegister);
    app.post('/logout', authController().logout);

    //user's dashboard
    app.get('/dashboard', auth, dashboardController().index)
}

module.exports = initRoutes;