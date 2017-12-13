
const Player = require('mongoose').model('Player');

module.exports = {

    list(req, res){
        Player.find({}).sort({score:-1})
        .then(result => res.json(result))
        .catch(err => res.send(404).json(err));
    },
    
    add(req, res){
        Player.count({id:req.body.id})
        .then(count => {
            console.log('count:', count)
            if(count === 0){
                const player = new Player(req.body);
                player.save()
                .then(result => res.send(200).json(result))
            } else {
                res.send(200);
            }
        })
        .catch(err => res.send(500).json(err))
    }

}