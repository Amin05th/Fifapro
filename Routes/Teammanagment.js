const express = require('express')
const fifapro = require('../Mongoose/users')
const Teammanagmentroute = express.Router()

Teammanagmentroute.post('/save', async (req, res) => {
    const value = req.body.LoginInput
    await fifapro.create({_id: value, cards: []})
})

Teammanagmentroute.get('/:id/Teammanagment', async (req,res) => {
    const param = req.params.id
    const FifaUser = await fifapro.findById(param)
    res.render('TeamManagment', {
        FifaUser: FifaUser,
        id:param
    })
})

module.exports = Teammanagmentroute