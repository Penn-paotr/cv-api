const mongoose = require('mongoose')
const experienceSchema = mongoose.Schema({    
    duree : String,
    entreprise: String,
    poste: String,
    missions: String
})

const Experience = mongoose.model('Experience', experienceSchema)
module.exports = Experience