const Dashbored= require('../model/ModelDashbored.js')
exports.createDashbored=(req,res)=>{
    // console.log(req.body)
    const newDashbored=new Dashbored({
FirstName:req.body.FirstName,
LastName:req.body.LastName,

})
newDashbored.save()
.then(result=>res.send(result))
.catch(er=>console.log(er))

}




exports.updateDashbored=(req,res)=>{
    let id=req.params.DashboredId

    Dashbored.findByIdAndUpdate({_id:id},req.body)
.then(result=>res.status(200).json({message:" do it"}))
.catch(er => console.log(er))

}


exports.FindDashbored=(req,res) =>{
   
    Dashbored.find()
    .then(result=>res.send(result))
    .catch(er=>console.log(er))
}

exports.deleteDashbored=(req,res)=>{let id=req.params.DashboredId

    Dashbored.findByIdAndDelete({_id:id},req.body)
    .then(result=>res.status(200).json({message:"delete "}))
    .catch(er => console.log(er))
    
    }