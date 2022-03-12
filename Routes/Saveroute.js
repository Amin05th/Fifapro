const express = require('express')
const Loginroute = express.Router()
const fifapro = require('../Mongoose/users')


Loginroute.get('/', (req, res) => {
    res.render('Login')
})  

Loginroute.post('/', async (req, res) => {
    const value = req.body.LoginInput 
    try{
        const FifaUser = await fifapro.findById(value)
        if(FifaUser == null) return res.redirect('/')
        res.redirect(`/${value}`)
    }catch(e) {
        console.log(e)
    }
})

module.exports = Loginroute