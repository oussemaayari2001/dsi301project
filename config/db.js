
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://mohamedakrout:20540601mot@cluster0.joo2wsy.mongodb.net/?retryWrites=true&w=majority',
  { useNewUrlParser: true,
    useUnifiedTopology: true })
    mongoose.connection.once('open',()=>{
      console.log('connexion reussite !');
    }).on('error',()=>{
      console.log('connection échouée !');
    })
    
    
 module.exports=mongoose