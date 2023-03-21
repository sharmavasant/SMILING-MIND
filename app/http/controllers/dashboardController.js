function dashboardController() {
    return {
        index(req,res) {
            return res.render('dashboard');
        }
    }
}

module.exports=dashboardController;