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
const annonce =mongoose.model('Annonce',AnnonceSchema)

module.exports = annonce;