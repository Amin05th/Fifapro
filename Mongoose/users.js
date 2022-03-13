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
    }]
})

const FifaUserTeam = new Schema({
    _id: String,
    Goalkeeper: [],
    Defenders: [],
    Midfield: [],
    Striker: [],
})

module.exports = model('fifapro', Fifaplayer)