const CSV=require('csv-parser');
const createCsvWriter=require('csv-writer').createObjectCsvWriter
const csvwriter=createCsvWriter({
    path:'C:/Users/htc/PycharmProjects/ModulePy/testing1.csv',
    header:[
        {id:'name',title:'name'},
        {id:'emploie',title:'emploie'},
        {id:'location',title:'location'},
        {id:'profile',title:'profile'},
        {id:'competence',title:'competence'}
    ],
    fieldDelimiter:';'
  
})
const results=[]
const fs=require('fs');
const candidat = require('../models/candidat');
const read_add_CSVfile=()=>{
    fs.createReadStream('C:/Users/htc/PycharmProjects/ModulePy/testing1.csv')
   .pipe(CSV({separator: ';'})).on('data',(chunk)=>{
    console.log("dataaaa",chunk);
   results.push(chunk)
}
)
    .on('end',()=>
    {
    console.log(results+"aaaaaa");
    results.forEach(element => {
    elm=new candidat(element)
    console.log(elm);
    elm.save()
});
csvwriter.writeRecords([])  
}

)
.on('error',(err)=>{
    console.log(err);
}
)    
}
read_add_CSVfile()
module.exports=read_add_CSVfile
