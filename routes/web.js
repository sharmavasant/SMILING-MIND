const homeController = require('../app/http/controllers/homeController');
const dashboardController = require('../app/http/controllers/dashboardController');

function initRoutes(app) {
    app.get('/', homeController().index);
    app.get('/dashboard', dashboardController().index);
}

module.exports = initRoutes;