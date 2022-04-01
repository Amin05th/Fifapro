const express = require('express')
const Chatroute = express.Router()

Chatroute.get('/:id/chat/:serverid', (req,res) => {
    const id = req.params.id
    res.render('Chat', {id: id})
})


module.exports = Chatroute