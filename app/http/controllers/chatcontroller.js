function chatController (){
    return{ 
        index(req, res){
            return res.render('chat')
        }
    }
}

module.exports = chatController