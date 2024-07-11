const express = require('express')
const router = express.Router()
const loisirModel = require('../models/loisirModel')

router.get('/loisir', async(req,res)=>{
    const loisirs = await loisirModel.find()
    console.log(loisirs);
    res.json(loisirs);
})

router.post('/loisir', async(req,res)=>{
    const loisir = req.body
    await loisirModel.create(loisir)
    res.json({message:`Le centre d'intérêt ${loisir.field} a été ajouté`})
})

router.delete('/loisir/:id', async(req, res)=>{    
    const{id} = req.params;
    const loisir = await loisirModel.findByIdAndDelete(id)
    res.json({message:`Le centre d'intérêt ${loisir.field} a été supprimé`})
})


module.exports = router