const mongoose = require('mongoose')
const formationSchema = mongoose.Schema({    
    annee: String,
    etablissement: String,
    diplome: String,
    contenu: String
})

const Formation = mongoose.model('Formation', formationSchema)
module.exports = Formation