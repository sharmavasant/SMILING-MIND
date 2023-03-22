const homeController = require('../app/http/controllers/homeController');
const dashboardController = require('../app/http/controllers/dashboardController');
const gameController = require('../app/http/controllers/gameController');
const contact = require('../app/http/controllers/contact');

function initRoutes(app) {
    app.get('/', homeController().index);
    app.get('/dashboard', dashboardController().index);
    app.get('/game', gameController().index);
    app.get('/contact', contact().index);
}

module.exports = initRoutes;