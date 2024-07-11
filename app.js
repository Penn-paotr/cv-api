const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()   // car .env sinon si nom de fichier, .config(nom.env)
const cors = require('cors')

const contactRoute = require('./routes/contactRoute')
const competenceRoute = require('./routes/competenceRoute')
const langueRoute = require('./routes/langueRoute')
const experienceRoute = require('./routes/experienceRoute')
const formationRoute = require('./routes/formationRoute')
const loisirRoute = require('./routes/loisirRoute')

const app = express()
const PORT = process.env.PORT


mongoose.connect(process.env.DB)
    .then(() => {
        console.log('Connexion à la base de données');
    })
    .catch((error)=>{
        console.log(error);
    })
// N'empêche pas erreur cde cross-origin-request :
// app.use((req, res, next) => {
//     res.header('Access-Control-Allow-Origin', 'http://localhost:3000'); // Remplacez '*' par l'origine que vous voulez autoriser
//     // Autres en-têtes CORS si nécessaire
//     res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
//     next();
//   });

// fin du test

app.use(cors())
app.use(express.json())
app.use('',contactRoute)
app.use('',competenceRoute)
app.use('',langueRoute)
app.use('',experienceRoute)
app.use('',formationRoute)
app.use('',loisirRoute)

app.listen(PORT, ()=> {
    console.log(`Le serveur tourne sur http://localhost:${PORT}`);
})

app.get('/', (req,res) => {
    res.json({message: "bonjour, voici votre première route."})
})

