const nodemailer = require("nodemailer")
const crypto = require("crypto")
const Comments = require("../models/comments")
const bcryptjs = require("bcryptjs")
const jwt = require("jsonwebtoken")



const commentControllers={

cargaComentarios: async (req, res) => {

    const {  itinerario,mensaje,user} = req.body.dataComents 
 console.log(req.body.dataComents )

 new Comments({itinerario: itinerario,
   user: user,
    comment:mensaje
 }).save()
//  .then(response=>res.json({response}))
 let comentario
        try {
           
           comentario=await Comments.find({itinerario:itinerario}).populate("user")

        } catch (error) {
            console.log(error)
            
        }
        res.json({success:true, response:{comentario} , mensaje:"Your comment has been saved"})
       
},

obtenerComentarios:async(req, res) =>{
    console.log(req.body)
    let id =req.params.id;
    
    let comentario
    try {
        comentario=await Comments.find({itinerario:id}).populate("user")

    } catch (error) {
        console.log(error)
        
    }
    res.json({success:true, response:{comentario}})


},

borrarComentario:async(req, res) =>{
    let id=req.params.id;
   
    let comentario
    try {
        comentario=await Comments.findOneAndDelete({_id:id})

    } catch (error) {
        console.log(error)
        
    }
    res.json({success:true, response:{comentario}, mensaje:"Your comment has been deleted"})

},

modificarComentario:async(req, res) =>{
    let id=req.params.id;
    console.log(req.body)
    let newComents= {comment:req.body.data}

    console.log(newComents)
   
    let comentario
    try {
        comentario=await Comments.findOneAndUpdate({_id:id}, newComents,{new:true} )

    } catch (error) {
        console.log(error)
        
    }

    res.json({success:true, response:{comentario}, mensaje:"Your comment has been modified"})


}



}

module.exports= commentControllers;
