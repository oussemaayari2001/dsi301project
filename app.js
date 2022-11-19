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
const filtration=require('./Filtration/filtrationSelonForm')


//Filtration

let id_RH='6374e23bec9bcdc8c49970ee'


console.log(filtration(id_RH));
//ADD CSV FILE TO DATABASE
const  read_add_file=require('./Filtration/filtrationLinkedIn')
read_add_file()
module.exports = app;
