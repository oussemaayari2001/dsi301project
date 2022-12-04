const { Annonce } = require('../models');
const { where } = require('../models/annonce');
const annonce = require('../models/annonce');
const RH = require('../models/ResourseHumain');


const getAll=(req,res,next)=>{
  annonce.find()
  .then(annonce => res.status(200).json(annonce))
  .catch(error => res.status(400).json({ error }));
}

const getById=(req,res,next)=>{
  annonce.findOne({ _id: req.params.id })
  .then(annonce => res.status(200).json({annonce}))
  .catch(error => res.status(404).json({ error }));
}

const saveAnnonce=(req,res,next)=>{
  
    const annonce_ajoutee = new annonce(req.body);
  
  annonce_ajoutee.save().then((annonce)=>{
    res.status(200).json({annonce})
  console.log('annonce created');
  }).catch((err)=>{
    console.log(err);
  })

  
}

const deleteAnnonce=(req,res,next)=>{
    let id = req.params.id;
  annonce.findByIdAndDelete(id)
    .then(result => {
    
    res.json({message :'Annonce Deleted' })
    })
    .catch(err => {
      console.log(err);
    });

}



const updateAnnonce = (req,ress,next)=>{
  
  let Annonce_ajoutee = req.body

annonce.findByIdAndUpdate(req.params.id,Annonce_ajoutee)  .then((res)=>{

 ress.send(req.body)

}).catch((err)=>{
  console.log(err);
})


}
const getCandidatsFromIdAnnonce=(req,res)=>{
  const tabC=[]
let id=req.params.id
const rh=Annonce.findById(id).then((resultat)=>{
  res.send(resultat.Candidats)
})





}




module.exports={
    saveAnnonce,
    getAll,
    getById,
    deleteAnnonce,
    updateAnnonce,
    getCandidatsFromIdAnnonce
}