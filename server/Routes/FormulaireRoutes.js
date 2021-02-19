const Formulaire = require('../controller/ControllerFormulaire.js')

module.exports=(app) => {
const multer = require('multer')
const Storage = multer.diskStorage
({destination:(res,file,cb)=>
    {cb(null,'../mon-app/public/Files')},
  filename:  (res,file,cb)=>
  {cb(null,file.originalname)}
})
const upload=multer({
    storage:Storage
})
app.post('/createFormulaire',Formulaire.createFormulaire)
app.get('/findFormulaire',Formulaire.FindFormulaire)
}