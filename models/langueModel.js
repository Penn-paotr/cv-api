const mongoose = require('mongoose')
const langueSchema = mongoose.Schema({    
    name: String,
    level: String
})

const Langue = mongoose.model('Langue', langueSchema)
module.exports = Langue