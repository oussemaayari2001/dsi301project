const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const {AnnonceSchema} = require('./annonce')

const RHSchema=new Schema({

    nom:{
        type:String,
       
    },

    email:{
        type:String,
        
    },
    password:{
        type:String,
      
    },
    domaineMetier:{
        type:String
    },
    adresse:{
        type:String
    },
    tel:{
        type:Number
    },
    annonces: [{type:Schema.Types.ObjectId,ref:'Annonce'}]
})


const RH =mongoose.model('ResourceHumaine',RHSchema)

module.exports=RH