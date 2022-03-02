// require() crear archivo y aqui llamarlo 
const nodemailer= require("nodemailer")
const crypto= require("crypto")
const User = require("../models/user.js")
const bcryptjs=require("bcryptjs")

async function sendEmail(email,uniqueText){

  const transporter = nodemailer.createTransport({ 

       host:"smtp.gmail.com",
       port:465,
       secure:true,
       auth:{

         user:"yohavale7883@gmail.com", //crear correo para la parctica 
         pass:process.env.NODEMAILER

       }
      
   })
const sender= "yohavale7883@gmail.com"
const mailOptions ={

  from:sender,
  to:email,
  subjet:"verificacion de usuario ",
  html:`Presiona <a href=http://localhost:4000/api/verify${uniqueText}>Aqui</a>Para validar tu email`

}
await transporter.sendMail(mailOptions,function(error,response){

  if (error){
    console.log(error)
  }
  else {
    console.log("mensaje enviado")// parametros para el usuario 
  }
})

}


const usersController = {
     
  verifyEmail: async(req,res)=>{

    const{uniqueText}=req.params// toma el parametro de la clave 
    const user= await User.findOne({uniqueText:uniqueText})
    if (user) {
      user.emailVerificado=true
      await user.save()
      res.redirect("http://localhost:3000/Signin")
      
    }

  },


    nuevoUsuario: async(req,res)=>{

      const {firstname,lastname, email,password} = req.body.NuevoUsuario
      console.log(req.body)
      try{
          const UsuarioExiste= await User.findOne({email})

          if (UsuarioExiste){
              res.json({success:"falseUE" ,response:"Usuario ya existe, te invitamos al SignIn"})//responseUE

          }
          else {
              
              const uniqueText=crypto.randomBytes(15).toString("hex")//genera un text de 15 caracteres hexagecimal  
              const emailVerificado=false
              const passwordHash = bcryptjs.hashSync(password,10)
              const NewUser= new User ({
                firstname,
                lastname,
                 email,
                 password: passwordHash,
                 uniqueText,
                 emailVerificado

              })
              if (!emailVerificado) {
                await NewUser.save()
                await sendEmail(email, uniqueText)
                res.json({success:"trueUE", response:"te hemos envia un correo electronico  para verifica tu email"})
              }
              // await NewUser.save()
              
          }

         


      }

      catch (error){ res.json({success:"falseUE", response:null, error:error})}

    }

  
}
  module.exports = usersController