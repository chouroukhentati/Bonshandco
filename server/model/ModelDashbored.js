const mongoose =require('mongoose')
const DashboredScheme=new mongoose.Schema({ 

FirstName:{type:String},
LastName:{type:String},

   })
   module.exports=mongoose.model('Dashbored',DashboredScheme)