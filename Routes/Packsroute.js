const express = require('express')
const Packsroute = express.Router()
const fifapro = require('../Mongoose/users')

Packsroute.route('/:id/packs')
.post(async (req, res) => {
    const param = req.params.id
    const Rating = req.body.Rating
    const Position = req.body.Position
    const PlayerName = req.body.PlayerName
    const Pac = req.body.Pac
    const Sho = req.body.Sho
    const Pas = req.body.Pas
    const Dri = req.body.Dri
    const Def = req.body.Def
    const Phy = req.body.Phy

    if(PlayerName === undefined) return
    await fifapro.findByIdAndUpdate(param, {
        $push: {
            cards: [{
                Rating: Rating,
                Position:Position,
                PlayerName:PlayerName,
                Stats: [{
                    Pac:Pac,
                    Sho:Sho,
                    Pas:Pas,
                    Dri:Dri,
                    Def:Def,
                    Phy:Phy,
                }]
            }]
        }
    })
    res.json({Rating:Rating, Position:Position, PlayerName:PlayerName, 
              Pac:Pac, Sho:Sho, Pas:Pas, Dri:Dri, Def:Def, Phy:Phy})
})
.get(async(req, res) => {
    const param = req.params.id
    res.render('OpenPacks', {
        param: param,
        AUTHTOKEN: process.env.AUTHTOKEN,
    })
})

module.exports = Packsroute