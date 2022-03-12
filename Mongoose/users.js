const mongoose = require('mongoose')

const Fifapro = new mongoose.Schema({
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

module.exports = mongoose.model('fifapro', Fifapro)