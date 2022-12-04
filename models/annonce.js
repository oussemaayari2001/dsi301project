const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AnnonceSchema = new Schema({

    titre:{
        type:String,

    },
    experience:{
        type:String,

    },
    langue:{
        type:String,

    },
    num_poste_vac:{
        type:Number,

    },
    date_dajout:{
        type:String
    },

    Type_emploi:{
        type:String,
    },
    niveau:{
        type:String,
        
    },

    description:{
        type:String,
        
    },
    mots_cles:{
        type:String,
        lowercase:true
    },
    niveau:{
    type:String
    },
    Candidats:
    
        [{type:Schema.Types.ObjectId,ref:'Candidat'}]
    

})
const annonce =mongoose.model('Annonce',AnnonceSchema)

module.exports = annonce;