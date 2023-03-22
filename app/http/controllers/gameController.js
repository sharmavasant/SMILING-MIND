function gameController() {
    return {
        index(req, res) {
            return res.render('game');
        }
    }
}

module.exports = gameController;