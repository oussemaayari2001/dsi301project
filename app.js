require('./config/db')
const express= require('express');
const app=express();
//Define Models
require('./models/index')

//DEFINE_____ROUTES
const AnnonceRoute= require('./Routes/AnnonceRoute');
const CandidatRoute=require('./Routes/CandidatRoute');
const RHRoute=require('./Routes/RHRoute');


app.use(express.json());
app.use(express.urlencoded({ extended: true }));


//UTILISATION DES ROUTES
app.use('/annonce', AnnonceRoute);
app.use('/candidat',CandidatRoute);
app.use('/rh',RHRoute);


//Module filtration
const filtration=require('./filtration')


//Filtration

let id_RH='6374e23bec9bcdc8c49970ee'

console.log(filtration(id_RH));

module.exports = app;
