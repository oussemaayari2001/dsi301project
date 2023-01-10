const express=require('express');
const publication = require('../models/publication2');
const Publication=require('../models/publication2')
const router=express.Router()
router.post('/add',(req,res)=>{
    let publication_ajoutee=new Publication(req.body);
    publication_ajoutee.save().then((resultat)=>{
        res.end(resultat);
    })


})
router.put('/update/:id',(req,res)=>{
    Publication.findByIdAndUpdate(req.params.id,req.body).then((resultat)=>{
        res.end(resultat);
    });
    
})
router.delete('/delete/:id',(req,res)=>{
    Publication.findByIdAndDelete(req.params.id).then(()=>{
        res.send('element supprimer')
    })
})
router.get('/:titre',(req,res)=>{
    publication.findOne({titre:req.params.titre}).then((resultat)=>{
        res.send(resultat)
    })
})
router.get('/',(req,res)=>{
    publication.find().then((resultat)=>{
res.send(resultat);
    })
})
module.exports=router