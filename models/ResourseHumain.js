const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const AnnonceSchema = new Schema({

    title:{
        type:String,

    },
    num_poste_vac:{
        type:Number,

    },
    Type_e:{
        type:String,
    },
    niveau:{
        type:String,
        
    },

    discription:{
        type:String,
        
    },
    motcles:{
        type:String,
        lowercase:true
    }


})



const RHSchema=new Schema({

    nom:{
        type:String,
        validator:{
            unique:true
        }
    },
    annonces:{
        type:[AnnonceSchema]
    }




})


const RH =mongoose.model('ResourceHumaine',RHSchema)

module.exports=RH