require('dotenv').config()
const express = require('express')
const fifapro = require('../Mongoose/users')
const Dashboardroute = express.Router()

Dashboardroute.post('/save', async (req, res) => {
    const value = req.body.LoginInput
    await fifapro.create({_id: value, cards: []})
})

Dashboardroute.get('/:id', (req, res) => {
    const params = req.params.id
    res.render('Dashboard', {id:params})
})

module.exports = Dashboardroute