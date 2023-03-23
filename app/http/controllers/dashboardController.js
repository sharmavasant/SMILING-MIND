function dashboardController() {
    return {
        index(req,res) {
            return res.render('users/dashboard');
        }
    }
}

module.exports=dashboardController;