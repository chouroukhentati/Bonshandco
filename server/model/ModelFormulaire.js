const mongoose =require('mongoose')
const FormulaireScheme=new mongoose.Schema({ 
    
Number:{type:Number},
Voname:{type:String},
Nachname:{type:String},
DATE1:{type:Date},
DATE2:{type:Date},
DATE3:{type:Date},
DATE4:{type:Date},

Street:{type:String},
Plz:{type:String},
Stadt:{type:String},
Land:{type:String},
Code:{type:Number},
Phone:{type:Number},
Email:{type:String},
Productfile:{type:String}

   })
   module.exports=mongoose.model('Formulaire',FormulaireScheme)