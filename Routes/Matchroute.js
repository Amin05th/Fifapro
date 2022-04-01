const express = require('express')
const Matchroute = express.Router()
const fifapro = require('../Mongoose/users')
const UUID = require('uuid')

Matchroute.get('/:id/match', async (req, res) => {
    const param = req.params.id
    const SavedTeamForMatch = await fifapro.findById(param)
    const id = req.params.id
    res.render('StartMatch', {
        id: id,
        SavedTeamForMatch: SavedTeamForMatch,
        uniqueId: UUID.v4()
    })
})

Matchroute.post('/:id/match', async (req, res) => {
    const WonCoins = req.body.WonCoins
    const param = req.params.id
    console.log(WonCoins)
    await fifapro.findByIdAndUpdate(param, {
        $inc: {
            Coins: WonCoins
        }
    })
})

module.exports = Matchroute