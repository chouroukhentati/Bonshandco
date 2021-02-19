const mongoose =require('mongoose')
const StademScheme=new mongoose.Schema({ 

commentaire1:{type:String},
commentaire2:{type:String},


   })
   module.exports=mongoose.model('Stadem',StademScheme)