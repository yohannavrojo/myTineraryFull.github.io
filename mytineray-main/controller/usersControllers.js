// require() crear archivo y aqui llamarlo 
const nodemailer = require("nodemailer")
const crypto = require("crypto")
const User = require("../models/user.js")
const bcryptjs = require("bcryptjs")
const { response } = require("express")
const jwt = require("jsonwebtoken")

async function sendEmail(email, uniqueText) {

  const transporter = nodemailer.createTransport({

    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {

      user: "mytinerariyoha@gmail.com", //crear correo para la parctica emisor 
      pass: "luciano181598"

    }

  })
  const sender = "mytinerariyoha@gmail.com" // correo de verificacion recepto
  const mailOptions = {

    from: sender,
    to: email,
    subject: " My Tinerary User Email verification ",
    html: `<div style="margin: 20px; padding: 30px; background:#cf9bec; border:4px solid #a719ca;">
           <h1 style="color:#a719ca; font-family:Oswald ; font-size: 80px; text-align: center;">My Tinerary </h1>
           </br>
           <h2 style="color:#000000; font-style: 20px; text-align:center;"> Click<a 
           style ="color:#6309f3; font-style:"Oswald"     
           href=https://mytinerary-yohanna.herokuapp.com/api/verify/${uniqueText}>Aqui</a>To validate your email </h2>
           </br>
           </br>
           <h6 style="color: #a03a9e; font-size: 12px;text-align: center;">All Rights Reserved Copyright - 2022</h6>
           <h6 style="color: #a03a9e; font-size: 12px;text-align: center;"><i>powered by yohannvrojo</i> </h6>
           </div>`

  }
  await transporter.sendMail(mailOptions, function (error, response) {


    if (error) {
      console.log(error)
    }
    else {
      console.log("mensaje enviado")// parametros para el usuario 
    }
  })

}


const usersController = {

  verifyEmail: async (req, res) => {
    const { uniqueText } = req.params// toma el parametro de la clave 
    const user = await User.findOne({ uniqueText: uniqueText })
    if (user) {
      user.emailVerificado = true
      await user.save()
      res.redirect("http://localhost:3000/Signin")

    } else {
      res.json({ success: false, response: "It has not been possible to verfy your email" })
    }

    
  },




  nuevoUsuario: async (req, res) => {

    const { firstname, lastname, email, password, from } = req.body.NuevoUsuario
    
    try {
      const UsuarioExiste = await User.findOne({ email })

      if (UsuarioExiste) {
      
       
        if (from!==signup) {
          const passwordHash = bcryptjs.hashSync(password, 10)
          UsuarioExiste.password = passwordHash;
          UsuarioExiste.emailVerificado = true;
          UsuarioExiste.from= from;
          UsuarioExiste.connected = false;

          UsuarioExiste.save();
          res.json({ success: true,mensaje:"We update your sign in so you can do it with " +from })
        }
      
        else {
          rep.json({ success: false, mensaje: "This email is already in use, perform the signin" })
        }
      }
      else{
        const emailVerificado = false
        const uniqueText = crypto.randomBytes(15).toString("hex")//genera un text de 15 caracteres hexagecimal  
        const passwordHash = bcryptjs.hashSync(password, 10)
        const NewUser = new User({
          firstname,
          lastname,
          email,
          password: passwordHash,
          uniqueText,
          emailVerificado,
          connected: false,
          from,
        })
        
        

        if (from!=="signup") {
            NewUser.emailVerificado = true,
            NewUser.from = from,
            NewUser.connected = false,
           
            await NewUser.save()
            res.json({ success:true,data:{ NewUser }, mensaje: "congratulations we have created your user with " + from})
        }

        else {
          NewUser.emailVerificado = false;
          NewUser.from = from;
          NewUser.connected = false;
          await NewUser.save();
          await sendEmail(email, uniqueText);
          res.json({ success: true, mensaje: "we have sent you your email", data:{NewUser} })

        }
    }
  }

  catch (error) { res.json({ success: false, from: "Signup", mensaje: "The mail is already in use", error: error }) }
 
},


  accesoUsuario: async (req, res) => {

    const { email, password } = req.body.userData
    // console.log(req.body)
    try {
      const usuario = await User.findOne({ email })

      if (!usuario) {
        response.json({ success: false, from: "controller", mensaje: "the username and/or password are incorrect" })
      } else {

        if (usuario.emailVerificado) {
          let passwordCoincide = bcryptjs.compareSync(password, usuario.password)

          if (passwordCoincide) {
            // const token = jwt.sign({ ...usuario }, process.env.SECRETKEY)
            const datoUser = {
              firstname: usuario.firstname,
              lastname: usuario.lastname,
              email: usuario.email,
              id:usuario._id,

            }
            
            usuario.connected = true
            await usuario.save()

            const token = jwt.sign({ ...datoUser}, process.env.SECRETKEY,{expiresIn:60*60*24})
            //response muestra los datos de token y datouser 
            res.json({ success: true, from: "controller", response: { token, ...datoUser },mensaje:"welcome again" + usuario.firstname  }) 
          }
          else { res.json({ success: false, from: "controller", mensaje: "the username and/or password are incorrect" }) }

        }
        else { res.json({ success: false, from: "controller", mensaje: "check your email to validate it " }) }

      }


    } catch (error) { console.log(error); res.json({ success: false, response: null, mensaje:"an error occurred try again later" }) }

  },

  
cerrarsesion: async (req, res) => {

    const email = req.body.email
  

    const user = await User.findOne({ email })

    user.connected = false

    await user.save()
    res.json({ success: true, mensaje: "Sign off" })

  },

  verificarToken: async(req,res)=>{

    if (!req.error) {

      res.json({success: true,
         response:{
        firstname:req.user.firstname,
        lastname:req.user.lastname,
        email:req.user.email,
        id:req.user.id } , 
         mensaje: "Welcome again" + req.user.firstname  }
         )
        
    }else{
      res.json({
        success:false, mensaje:"Please sign in again "
      })
    }
  },

  

}
module.exports = usersController