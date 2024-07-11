const express = require('express')
const router = express.Router()
const contactSchema = require('../models/contactModel')

// ** READ **  // tableau vide si pas encore de post (CREATE)
router.get('/contact', async(req,res)=>{
    const contact = await contactSchema.find()
    console.log(contact);
    res.json(contact)
})

// router.post('/contact', async(req, res)=>{
//     const contact = req.body;
//     console.log(contact);
//     const newContact = await contactSchema.create(contact())
//     res.json(newContact)
// })

// ** DELETE + CREATE **  //
// Avec la rubrique Contact, on va toujours écraser les données existantes, et les remplacer
router.post('/contact', async(req, res)=>{
    const newContact = req.body;
    await contactSchema.deleteOne()
    await contactSchema.create(newContact)
    res.json(newContact)
})

module.exports = router