const express = require('express')
const router = express.Router()
const competenceModel = require('../models/competenceModel')

router.get('/competence', async(req,res)=>{
    const competences = await competenceModel.find()
    console.log(competences);
    res.json(competences);
})

router.post('/competence', async(req,res)=>{
    const competence = req.body
    const newCompetence = await competenceModel.create(competence)
    console.log(newCompetence);
    res.json({message:`La compétence ${newCompetence.skill} a été ajoutée`})
})

router.delete('/competence/:id', async(req,res)=>{
    const {id} = req.params     // car route avec paramètre    
    const competence = await competenceModel.findByIdAndDelete(id)
    res.json({message:`La compétence ${competence.skill} a été supprimée`})
})

module.exports = router