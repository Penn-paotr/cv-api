const express = require('express')
const router = express.Router()
const formationModel = require('../models/formationModel')

router.get('/formation', async(req,res)=>{
    const formations = await formationModel.find()
    console.log(formations);
    res.json(formations);
})

router.post('/formation', async(req,res)=>{
    const formation = req.body
    await formationModel.create(formation)
    res.json({message:`La formation ${formation.diplome} a été ajoutée`})
})

router.delete('/formation/:id', async(req, res)=>{
    const{id} = req.params;
    const formation = await formationModel.findByIdAndDelete(id)
    res.json({message:`La formation ${formation.diplome} a été supprimée`})
})


module.exports = router