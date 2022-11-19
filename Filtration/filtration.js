const models=require('../models/index')

const TabComp=(str)=>{
    
let array_competence= []



 if (str.toString().includes(',')){
    array_competence=str.toString().split(',')
    
}
else{
    array_competence=str.toString().split()
}


return array_competence

}


const  filtrer= async (id)=>{
  const res_rh = await models.RH.findById(id);
    
let id_annonce=res_rh.get('annonces')[0];
const res_annonce = await models.Annonce.findById(id_annonce);
let mot_cles=res_annonce.motcles;

let tab_id_candidat=res_annonce.get('Candidats');


let tab_candidat=[]
for (let i = 0; i < tab_id_candidat.length; i++) {
    const element = await models.Candidat.findById(tab_id_candidat[i]);    
    tab_candidat.push(element)
}
var array_mot_cles= []


 if (mot_cles.includes(',')){
    array_mot_cles=mot_cles.toLowerCase().split(',')
    
}
else{
    array_mot_cles=mot_cles.toLowerCase().split()
}


    console.log("Les mots Clés de Cette Annonce : \n",array_mot_cles);

console.log(tab_candidat);

    var tab_candidat_filtrer=tab_candidat.filter(elm=>
      { 
         var tabcomp=TabComp(elm.competence);
    
        
       for (let i = 0; i < tabcomp.length; i++) {
        const element = tabcomp[i];

        if (array_mot_cles.includes(element.toLowerCase())) {
            return element
            
        }
        
    
       }
    
    }
   
)
console.log("Les candidats filtrer : \n \n",tab_candidat_filtrer);

}

module.exports=filtrer