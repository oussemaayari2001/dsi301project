const app = require('../app');
const RH = require('../models/ResourseHumain');
const Annonce = require('../models/annonce');

const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken')
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
  
  RH.findOne({
    
    //first step
  email: req.body.email 


}

).then((user)=>{
  if (user) {
    res.send({err:'Mail Already exists'})
  } else {
    
  const hashedPassword =  bcrypt.hashSync(req.body.password, 10)

  let __RH = new RH({
      email: req.body.email,
      password: hashedPassword,
      nom:req.body.nom,
      email:req.body.email,
      
      domaineMetier:req.body.domaineMetier,
      adresse:req.body.adresse,
      tel:req.body.tel,
      annonces: req.body.annonces,
      

  })
  

    __RH.save().then((r)=>{
      console.log(r);
      return   res.json({r,message:'register succedded'})
    }).catch((err)=>{
      res.send({err:err})
    })



  }
})

  
}

const updateRh = (req,res,next)=>{
  if (req.body.password==undefined) {
    let Rh_ajoutee = req.body
 
    RH.findByIdAndUpdate(req.params.id,Rh_ajoutee)  .then((rh)=>{
  
     res.json(Rh_ajoutee)
   
    }).catch((err)=>{
      console.log(err);
    })
    
  } else {
    const hashedPassword =  bcrypt.hashSync(req.body.password, 10)
    req.body.password=hashedPassword
    let Rh_ajoutee = req.body
   
    RH.findByIdAndUpdate(req.params.id,Rh_ajoutee)  .then((rh)=>{
  
     res.json(Rh_ajoutee)
   
    }).catch((err)=>{
      console.log(err);
    })
    
  }
 
 

}
var tab_annonces=[]

const getAnnoncesByIdRh=(req,res)=>{
  
  let tab_id_annonces=[]
  let id_RH=req.params.id;
  RH.findById(id_RH).then((resultat)=>{
    console.log(resultat);
    if (resultat) {
      tab_id_annonces= resultat.annonces
      res.send(tab_id_annonces)
  //     for (let i = 0; i < tab_id_annonces.length; i++) {
  //       const element =  tab_id_annonces[i];
      
  //   Annonce.findById(element).then((resultat)=>{
  //   console.log('Resultat',resultat);
  //  return resultat
  //   }).then((result)=>{
  //     tab_annonces.push(result)
  //     console.log(tab_annonces,'aaaa');
     
      
  //   })
        
  //     }

  
     
     
   
    } else {
      res.send({'message':'RH Not found'})
    }

  })

}

const signin = (req, res) => {

  console.log(req.body.email );
     RH.findOne({
    
        //first step
      email: req.body.email 
    

    }
    
    )
      .then(user => {
        console.log(user);
        if (!user) {
          return res.status(404).send({ message: "RH Not found." });
        }
  
 
        var passwordIsValid = bcrypt.compareSync(
          req.body.password,
          user.password
          
        );
        console.log(passwordIsValid);
        if (!passwordIsValid) {
          return res.status(401).send({
            accessToken: null,
            message: "Invalid Password!"
          });
        }
        else{
          var token = jwt.sign({ _id: RH._id }, "secret", {
            expiresIn: 86400 // 24 hours
          });
  
    res.send(
      {
        _id:user._id,
        nom:user.nom,
      email:user.email,
      password:user.password,
      domaineMetier:user.domaineMetier,
      adresse:user.adresse,
      tel:user.tel,
      annonces: user.annonces,
      accessToken:token

      }
      
      
      
      )

        }
  
    

    })}




    const Utilisateur = async (req, res) => {
      try {
          const cookie = req.cookies['jwt']
  
          const claims = jwt.verify(cookie, 'secret')
  
          if (!claims) {
              return res.status(401).send({
                  message: 'unauthenticated'
              })
          }
  
          const RH = await RH.findOne({_id: claims._id})
  
          const  data= RH.toJSON()
  
          res.send(data)
      } catch (e) {
          return res.status(401).send({
              message: 'unauthenticated'
          })
      }
  }


const logout = (req,res) => {
    res.cookie('jwt', '', {maxAge: 0})

    res.send({
        message: 'Logout succeded'
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
    updateRh,
    signin,
    Utilisateur,
    logout,
    getAnnoncesByIdRh
}