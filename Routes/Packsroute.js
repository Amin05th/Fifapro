const express = require('express')
const Packsroute = express.Router()
const fifapro = require('../Mongoose/users')

Packsroute.get('/:id/packs', async (req, res) => {
    const param = req.params.id
    res.render('OpenPacks', {
        AUTHTOKEN: process.env.AUTHTOKEN,
        param:param
    })
})

Packsroute.post('/:id/packs', async (req, res) => {
    const param = req.params.id
    console.log(param)
    const Rating = req.body.Rating
    const Position = req.body.Position
    const PlayerName = req.body.PlayerName
    const Pac = req.body.Pac
    const Sho = req.body.Sho
    const Pas = req.body.Pas
    const Dri = req.body.Dri
    const Def = req.body.Def
    const Phy = req.body.Phy

    if(PlayerName == undefined) return
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
})


module.exports = Packsroute