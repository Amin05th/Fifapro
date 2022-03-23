const express = require('express')
const fifapro = require('../Mongoose/users')
const Teammanagmentroute = express.Router()


Teammanagmentroute.post('/:id/savedteam', async (req, res) => {
    const id = req.params.id
    const Goalkeeper = req.body.Goalkeeper
    const Defender = req.body.Defender
    const Center = req.body.Center
    const Forward = req.body.Forward

    await fifapro.findByIdAndUpdate(id, {
        Team: [{
            Goalkeeper: Goalkeeper,
            Defenders: Defender,
            Midfield: Center,
            Striker: Forward
        }]
    })
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