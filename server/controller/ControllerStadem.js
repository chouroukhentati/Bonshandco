const Stadem = require('../model/ModelStadem')
exports.createStadem=(req,res)=>{
    // console.log(req.body)
    const newStadem=new Stadem({
commentaire1:req.body.commentaire1,
commentaire2:req.body.commentaire2,

})
newStadem.save()
.then(result=>res.send(result))
.catch(er=>console.log(er))

}


exports.FindStadem=(req,res) =>{
   
    Stadem.find()
    .then(result=>res.send(result))
    .catch(er=>console.log(er))
}

