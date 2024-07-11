const mongoose = require('mongoose')
const loisirSchema = mongoose.Schema({    
    field: String
})

const Loisir = mongoose.model('Loisir', loisirSchema)
module.exports = Loisir