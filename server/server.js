
const express=require('express')
const mongoose =require('mongoose')
const bodyParser=require('body-parser')
const cors=require('cors')
require('dotenv').config()
const app = express()
app.use(cors())

mongoose.connect(process.env.MONGO_URI,{useUnifiedTopology: true, useNewUrlParser: true},er=> {if(er)console.log(er)
    else console.log('db connected')}) 
    mongoose.set('useFindAndModify', false);
 
 const DashboredRoutes= require('./Routes/DashboredRoutes.js')
 app.use(bodyParser.json())
DashboredRoutes(app)



const StademRoutes= require('./Routes/StademRoutes.js')

StademRoutes(app)
const FormulaireRoutes= require('./Routes/FormulaireRoutes.js')

FormulaireRoutes(app)




app.listen(5000,er=> {if(er)console.log(er)
else console.log('serveur connected au port 5000')})

