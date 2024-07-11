const express = require('express')
const router = express.Router()
const langueModel = require('../models/langueModel')

router.get('/langue', async(req,res)=>{
    const langues = await langueModel.find()
    console.log(langues);
    res.json(langues);
})

router.post('/langue', async(req,res)=>{
    const langue = req.body
    const newLangue = await langueModel.create(langue)
    console.log(newLangue);
    res.json({message:`La langue ${newLangue.name} a été ajoutée`})
})

router.delete('/langue/:id', async(req, res)=>{
   
    // const id = req.params.id
    // ou par déconstruction :
    const{id} = req.params;
    const langue = await langueModel.findByIdAndDelete(id)
    res.json({message:`La langue ${langue.name} a été supprimée`})
})


module.exports = router