function contact() {
    return {
        index(req, res) {
            return res.render('contact');
        }
    }
}

module.exports = contact;