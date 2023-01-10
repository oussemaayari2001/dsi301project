const mongoose=require('mongoose')
const { DataTypes } = require('sequelize')
const Schema=mongoose.Schema
const publicationSchema=new Schema({
    titre:{
        type:String
    }
    ,
    continu:{
        type:String
    },
    date:{
        type:String
    },
    auteur:{
        nom:{
            type:String
        },
        prenom:{
            type:String
        }
    }
}) 
const publication=mongoose.model('publication',publicationSchema)
module.exports=publication