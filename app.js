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
const nodemailer = require("nodemailer");

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



//creation transporter
var transporter = nodemailer.createTransport({
  service: 'hotmail',
 
  auth: {
    user:"oussemaa782@gmail.com",
    pass: "wasoula1230"
  }
});
//les options de mail



const send=(mailrh,mailcandidat)=>{
  let mailOptions = {
    from: mailrh,
    to: mailcandidat,
    subject: "Entretient : acceptation pour le poste ",
    text: "Monsieur , A la suite de nos différents entretiens, nous avons le plaisir de vous informer que votre candidature  a été retenue.  Afin de procéder à une étude approfondie de votre candidature, nous souhaiterions avoir un entretien complémentaire  avec vous et vous faire passer une série de tests.   Nous vous remercions de bien vouloir prendre contact avec notre service recrutement le plus rapidement possible .Afin que nous puissions nous rencontrer.      nos salutations distinguées."
  };

   transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log('error',error);
    return null
  } else {
    console.log('Email sent: ' + info.response);
    console.log(info);
    return info.response;
  }
});

}


const send2=(mailrh,mailcandidat)=>{
  let mailOptions = {
    from: mailrh,
    to: mailcandidat,
    subject: "réponse à votre candidature au poste",
    text: " Madame, Monsieur .Nous avons bien reçu votre candidature relative  et nous vous remercions de l’intérêt que vous portez à notre société. Cependant, malgré l’intérêt que suscite votre candidature, nous sommes au regret de ne pas pouvoir répondre favorablement à votre demande, ne disposant pas dans l’immédiat, de poste correspondant à votre profil. Nous nous permettons toutefois, sauf avis contraire de votre part, de conserver votre curriculum vitae, afin de pouvoir vous contacter si un poste susceptible de vous intéresser venait à se présenter. Nous vous souhaitons une pleine réussite dans votre recherche. Nous vous prions d’agréer l’expression de nos sentiments respectueux."
  };

   transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log('error',error);
    return null
  } else {
    console.log('Email sent: ' + info.response);
    console.log(info);
    return info.response;
  }
});

}






app.post('/sendmailaccepter',(req,res)=>{
 let expediteur=req.body.expediteur
 let destinataire=req.body.destinataire
 let msg=  send(expediteur, destinataire)
 res.status(200).send(msg)
})

app.post('/sendmailrefuser',(req,res)=>{
  let expediteur=req.body.expediteur
  let destinataire=req.body.destinataire
  let msg=  send2(expediteur, destinataire)
  res.status(200).send(msg)
 })
  

  

    
  
    
  



app.listen(3000,()=>{
  console.log('server is connected');
})
// module.exports = app;
