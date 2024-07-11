const mongoose = require('mongoose')
const competenceSchema = mongoose.Schema({    
    skill: String
})

const Competence = mongoose.model('Competence', competenceSchema)
module.exports = Competence