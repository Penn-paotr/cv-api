const express = require('express')
const router = express.Router()
const experienceModel = require('../models/experienceModel')

router.get('/experience', async(req,res)=>{
    const experiences = await experienceModel.find()
    console.log(experiences);
    res.json(experiences);
})

router.post('/experience', async(req,res)=>{
    const experience = req.body
    await experienceModel.create(experience)
    res.json({message:`L'expérience professionnelle ${experience.poste} a été ajoutée`})
})

router.delete('/experience/:id', async(req, res)=>{
    const{id} = req.params;  
    const experience = await experienceModel.findByIdAndDelete(id)
    res.json({message:`L'experience ${experience.poste} a été supprimée`})
})


module.exports = router