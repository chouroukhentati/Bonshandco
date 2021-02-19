const Formulaire = require('../model/ModelFormulaire')
exports.createFormulaire=(req,res)=>{
    // console.log(req.body)
    const newFormulaire=new Formulaire({
number:req.body.number,
Voname:req.body.Voname,
Nachname:req.body.ProtokolInterviw1,
D1:req.body.D1,
D2:req.body.D2,
D3:req.body.D3,
D4:req.body.D4,
Street:req.body.Street,
Code:req.body.Code,
Plz:req.body.Plz,
Sdatd:req.body.Stadt,
Land:req.body.Land,
Phone:req.body.Phone,
Email:req.body.Email,
Productfile:req.body.Productfile


})
newFormulaire.save()
.then(result=>res.send(result))
.catch(er=>console.log(er))

}

exports.FindFormulaire=(req,res) =>{
   
    Formulaire.find()
    .then(result=>res.send(result))
    .catch(er=>console.log(er))
}


