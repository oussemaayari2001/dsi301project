const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const CandidatSchema=new Schema({

    nom:{
        type:String,
    },


    e_mail:{
        type:String,
    },
    location:{
        type:String,
    },


   


    profileUrl:{
        type:String,
    },

    grade:{
        type:Number,
    },

    ecole_lis:{
        type:Number,
    },

    ecole_ing:{
        type:Number,  
    },

    competence:{
        type:String,
        lowercase:true  
    },
    emploie:{
        type:String,
        lowercase:true  
    },

    ecole_mas:{
        type:Number,              
    },

    experience:{
        type:String,  
    },
    
    cv:{
        type:String,
              
    },
})


const candidat =mongoose.model('Candidat',CandidatSchema)

module.exports=candidat