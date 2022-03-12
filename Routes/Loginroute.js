const express = require('express')
const Saveroute = express.Router()
const fifapro = require('../Mongoose/users')

Saveroute.post('/save', async (req, res) => {
    const value = req.body.LoginInput
    await fifapro.create({_id: value, cards: []})
})

module.exports = Saveroute