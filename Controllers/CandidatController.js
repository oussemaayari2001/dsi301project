const app = require('../app');
const candidat = require('../models/candidat');


const getAll=(req,res,next)=>{
  candidat.find()
.then(candidat => res.status(200).json(candidat))
.catch(error => res.status(400).json({ error }));

}

const getById=(req,res,next)=>{
    candidat.findById({ _id: req.params.id })
    .then(thing => res.status(200).json(thing))
    .catch(error => res.status(404).json({ error }));
  

}

const savecandidat = (req,res,next)=>{
  
    const candidat_ajoutee = new candidat(req.body);
 
  candidat_ajoutee.save().then((candidat)=>{

   res.json(candidat)
  console.log('candidat created');
  }).catch((err)=>{
    console.log(err);
  })
 

}

const deletecandidat=(req,res,next)=>{
    const id = req.params.id;
  candidat.findByIdAndDelete(id)
    .then(result => {
    res.json({message :'Candidat is deleted'})
    })
    .catch(err => {
      console.log(err);
    });

}

module.exports={
    savecandidat,
    getAll,
    getById,
    deletecandidat
}