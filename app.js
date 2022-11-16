require('./config/db')
const express= require('express');
const app=express();
//Define Models
require('./models/index')

//DEFINE_____ROUTES
const AnnonceRoute= require('./Routes/AnnonceRoute');
const CandidatRoute=require('./Routes/CandidatRoute');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/annonce', AnnonceRoute);
app.use('/candidat',CandidatRoute);


module.exports = app;
