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
      pass: "mitinerari"

    }

  })
  const sender = "mytinerariyoha@gmail.com" // correo de verificacion recepto
  const mailOptions = {

    from: sender,
    to: email,
    subject: "verificacion de usuario ",
    html: `Presiona <a href=http://localhost:4000/api/verify/${uniqueText}>Aqui</a>Para validar tu email`

  }
  await transporter.sendMail(mailOptions, function (error, response) {

    if (error) {
      console.log(error)
    }
    else {
      alert("mensaje enviado")// parametros para el usuario 
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

    const { firstname, lastname, email, password } = req.body.NuevoUsuario
    
    try {
      const UsuarioExiste = await User.findOne({ email })

      if (UsuarioExiste) {
        res.json({ success: "falseUE", response: "Usuario ya existe, te invitamos al SignIn" })//responseUE

      }
      else {

        const uniqueText = crypto.randomBytes(15).toString("hex")//genera un text de 15 caracteres hexagecimal  
        const emailVerificado = false
        const passwordHash = bcryptjs.hashSync(password, 10)
        const NewUser = new User({
          firstname,
          lastname,
          email,
          password: passwordHash,
          uniqueText,
          emailVerificado,
          connected:false,

        })
        if (!emailVerificado) {
          
          await NewUser.save()
          await sendEmail(email, uniqueText)
          res.json({ success: "trueUE", response: "te hemos envia un correo electronico  para verifica tu email" })
        }
       

      }

    }

    catch (error) { res.json({ success: "falseUE", response: null, error: error }) }

  },

  accesoUsuario: async (req, res) => {

    const { email, password } = req.body.userData
    try {
      const usuario = await User.findOne({ email })

      if (!usuario) {
        response.json({ success: false, from: "controller", error: "el usuario y/o contraseña son incorrecto" })
      } else {

        if (usuario.emailVerificado) {
          let passwordCoincide = bcryptjs.compareSync(password, usuario.password)
          
          if (passwordCoincide) {
            const token = jwt.sign({ ...usuario }, process.env.SECRETKEY)
            const datoUser = {
              firstname: usuario.firstname,
              lastname: usuario.lastname,
              email: usuario.email,
          
            }
            usuario.connected= true
            await usuario.save()
            res.json({ success: true, from: "controller", response: { token, datoUser } })
          }
          else{res.json({ success: false, from: "controller", error: "el usuario y/o contraseña son incorrecto" })}

        }  
       else{res.json({success: false, from: "controller", error:"verifica tu email para validarlo "})}

      } 

    } catch (error) {console.log(error);res.json({success:false,response:null,error:error}) }

  },
cerrarsesion: async (req,res)=>{

  const email = req.body.email
  console.log(req.body.email)

  const user = await User.findOne({email})

  user.connected=false
  
  await user.save()
  res.json({success:true, response:"Cerrar sesion"})

}

}
module.exports = usersController