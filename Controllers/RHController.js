const app = require('../app');
const RH = require('../models/ResourseHumain');


const getAll=(req,res,next)=>{
  RH.find()
.then(rh => res.status(200).json(rh))
.catch(error => res.status(400).json({ error }));

}

const getById=(req,res,next)=>{
    RH.findById({ _id: req.params.id })
    .then(thing => res.status(200).json(thing))
    .catch(error => res.status(404).json({ error }));
  

}

const saveRh = (req,res,next)=>{
  
    let Rh_ajoutee = new RH(req.body);
    
 
  Rh_ajoutee.save().then((rh)=>{

   res.json(rh)
  console.log('candidat created');
  }).catch((err)=>{
    console.log(err);
  })
 

}

const updateRh = (req,res,next)=>{
  
    let Rh_ajoutee = req.body
 
  RH.findByIdAndUpdate(req.params.id,Rh_ajoutee)  .then((rh)=>{

   res.json(rh)
 
  }).catch((err)=>{
    console.log(err);
  })
 

}










const deleteRh=(req,res,next)=>{
    const id = req.params.id;
  RH.findByIdAndDelete(id)
    .then(result => {
    res.json({message :'Candidat is deleted'})
    })
    .catch(err => {
      console.log(err);
    });

}

module.exports={
    saveRh,
    getAll,
    getById,
    deleteRh,
    updateRh
}