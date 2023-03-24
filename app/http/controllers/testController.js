function testController() {
    return {
        index(req, res) {
            return res.render('test');
        }
    }
}

module.exports = testController;