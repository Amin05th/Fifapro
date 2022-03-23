const express = require('express')
const Matchroute = express.Router()
const fifapro = require('../Mongoose/users')

Matchroute.get('/:id/:serverid', async (req, res) => {
    const param = req.params.id
    const SavedTeamForMatch = await fifapro.findById(param)
    const id = req.params.id
    res.render('StartMatch', {
        id: id,
        SavedTeamForMatch: SavedTeamForMatch
    })
})

module.exports = Matchroute