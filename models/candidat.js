const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const CandidatSchema=new Schema({

    nom:{
        type:String,
    },


    email:{
        type:String,
    },
    location:{
        type:String,
    },
    linkedIn:{
        type:String
    },


   


    profile:{
        type:String,
    },

    grade:{
        type:String,
    },

    ecole_lisence:{
        type:String,
    },

    ecole_ingenieur:{
        type:String,  
    },

    competence:{
        type:String,
        lowercase:true  
    },
    emploie:{
        type:String,
        lowercase:true  
    },

    ecole_master:{
        type:String,              
    },

    experience:{
        type:String,  
    },
    
    file:{
        type:String,
              
    },
})


const candidat =mongoose.model('Candidat',CandidatSchema)

module.exports=candidat