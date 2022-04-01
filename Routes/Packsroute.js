const express = require('express')
const Packsroute = express.Router()
const fifapro = require('../Mongoose/users')
const UUID = require('uuid')

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
        },
        $inc : {
            Coins: -500 
        }
    })
    res.json({Rating:Rating, Position:Position, PlayerName:PlayerName, 
              Pac:Pac, Sho:Sho, Pas:Pas, Dri:Dri, Def:Def, Phy:Phy})
})
.get(async(req, res) => {
    const param = req.params.id
    const FifaUser = await fifapro.findById(param)
    const Coins =  FifaUser?.Coins
    res.render('OpenPacks', {
        id: param,
        AUTHTOKEN: process.env.AUTHTOKEN,
        Coins:Coins,
        uniqueId: UUID.v4()
    })
})

module.exports = Packsroute