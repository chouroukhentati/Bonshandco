const Dashbored =require('../controller/ControllerDashbored.js')

module.exports=(app) => {
const multer = require('multer')
const Storage = multer.diskStorage
({destination:(res,file,cb)=>
    {cb(null,'../projet/public/image')},
  filename:  (res,file,cb)=>
  {cb(null,file.originalname)}
})
const upload=multer({
    storage:Storage
})
app.post('/createDashbored',Dashbored.createDashbored),
app.put('/updateDashboared/:DashboredId',Dashbored.updateDashbored)
app.delete('/deleteDashbored/:DashboredId',Dashbored.deleteDashbored)
app.get('/findDashbored',Dashbored.FindDashbored)
}