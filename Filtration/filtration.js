const models=require('../models/index')

const TabComp=(str)=>{
    
let array_competence= []
if (str==undefined) {
    return null
} else {
    if (str.toString().includes(','))
   {
    array_competence=str.toString().split(',') 
   }

else
{
    array_competence=str.toString().split()
}

return array_competence
}


}
var tab_candidat_filtrer=[]
const  filtrer= async (id,idAnnonce)=>{
const res_rh = await models.RH.findById(id);    
/*
let id_annonce=res_rh.get('annonces').indexOf(idAnnonce);*/
const res_annonce = await models.Annonce.findById(idAnnonce);

let mot_cles=res_annonce.mots_cles;
let tab_id_candidat=res_annonce.get('Candidats');
let tab_candidat=[]

for (let i = 0; i < tab_id_candidat.length; i++) 
{
    const element = await models.Candidat.findById(tab_id_candidat[i]);    
    tab_candidat.push(element)
}

var array_mot_cles= []

if (mot_cles.includes(','))
    {
        array_mot_cles=mot_cles.toLowerCase().split(',')
    
    }
    else
    {
        array_mot_cles=mot_cles.toLowerCase().split()
    }


console.log("Les mots Clés de Cette Annonce : \n",array_mot_cles);

console.log("Tableau des Id de  Tous les Condidats : \n ",tab_id_candidat);
console.log("Tableau de Tous les Condidats : \n ",tab_candidat);
tab_candidat_filtrer=tab_candidat.filter(elm=>
      { 
         var tabcomp=TabComp(elm.competence);  
          if (tabcomp!=null) {
            for (let i = 0; i < tabcomp.length; i++)
            {
               const element = tabcomp[i];

               if (array_mot_cles.includes(element.toLowerCase()))
               {

                   return element
                   
               }
               
   
            }
          }
    }

)

console.log("Les candidats filtrer : \n \n",tab_candidat_filtrer);

return tab_candidat_filtrer
}


module.exports={filtrer,tab_candidat_filtrer}