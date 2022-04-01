require('dotenv').config()
const express = require('express')
const fifapro = require('../Mongoose/users')
const Dashboardroute = express.Router()

Dashboardroute.post('/save', async (req, res) => {
    const value = req.body.LoginInput
    await fifapro.create({_id: value, cards: []})
})

Dashboardroute.get('/:id', async (req, res) => {
    const params = req.params.id
    const FifaUser = await fifapro.findById(params)
    const Coins =  FifaUser?.Coins
    res.render('Dashboard', {id:params, Coins:Coins})
})

module.exports = Dashboardroute