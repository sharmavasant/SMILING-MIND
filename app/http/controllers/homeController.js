function homeController() {
    return {
        index(req,res) {
            return res.render('home')
        }
    }
}

module.exports = homeController;