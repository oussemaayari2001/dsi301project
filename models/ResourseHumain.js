const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const {AnnonceSchema} = require('./annonce')

const RHSchema=new Schema({

    nom:{
        type:String,
        validator:{
            unique:true
        }
    },
    annonces: [{type:Schema.Types.ObjectId,ref:'Annonce'}]
})


const RH =mongoose.model('ResourceHumaine',RHSchema)

module.exports=RH