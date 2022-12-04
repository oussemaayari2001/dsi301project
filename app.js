require('./config/db')
const express= require('express');

const app=express();
app.use(express.json())
const cors = require("cors");
var corsOptions = {
  origin: "*"
};
app.use(cors(corsOptions))
//Define Models
require('./models/index')

//DEFINE_____ROUTES
const AnnonceRoute= require('./Routes/AnnonceRoute');
const CandidatRoute=require('./Routes/CandidatRoute');
const RHRoute=require('./Routes/RHRoute');
const filtration=require('./Filtration/filtration')
//Accéder au body du Requete
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/rh/filtration/',(req,res,next)=>{
 
  let idRh=req.body.idRh
  let idAnnonce=req.body.idAnnonce
  filtration.filtrer(idRh,idAnnonce).then((resultat)=>{
    console.log('resultattttttttt',resultat);
    res.send(resultat)
   }).catch((err)=>{
    console.log(err);
   })
 
})
//UTILISATION DES ROUTES
app.use('/annonce', AnnonceRoute);
app.use('/candidat',CandidatRoute);
app.use('/rh',RHRoute);


//Module filtration


//Filtration

let id_RH='6383bce45cdd9389561cc254'

// filtration(id_RH,'6374e1a2ec9bcdc8c49970ec')


//ADD CSV FILE TO DATABASE

//  const  read_add_file=require('./Filtration/moveCsvToDb')

// read_add_file()

module.exports = app;
