const {Schema, model} = require('mongoose')

const Fifaplayer = new Schema({
    _id: String,
    cards: [{
        Rating: Number,
        Position: String,
        NationImg: String,
        ClubImg: String,
        PlayerImg: String,
        PlayerName: String,
        Stats: [{
            Pac: Number,
            Sho: Number,
            Pas: Number,
            Dri: Number,
            Def: Number,
            Phy: Number,
        }]
    }],
    Team: [{
        Goalkeeper: [],
        Defenders: [],
        Midfield: [],
        Striker: [],
    }],
    Coins: Number
})

module.exports = model('fifapro', Fifaplayer)