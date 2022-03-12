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
      // res.json({success:"falseUE",response:"user already exist.please sign in."})
       
        if (from!==signup) {
          const passwordHash = bcryptjs.hashSync(password, 10)
          UsuarioExiste.password = passwordHash;
          UsuarioExiste.emailVerificado = true;
          UsuarioExiste.from= from;
          UsuarioExiste.connected = false;

          UsuarioExiste.save();
          res.json({ success: true,response: "actualizamos tu sign in para que lo realizes con " +from })
        }
      
        else {
          rep.json({ success: false, response: "este email ya esta en uso,realiza el signin" })
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
            res.json({ success: true,data:{ NewUser }, response: "felicitaciones hemos creados tu usuario con " +""+from  })
        }

        else {
          NewUser.emailVerificado = false;
          NewUser.from = from;
          NewUser.connected = false;
          await NewUser.save();
          await sendEmail(email, uniqueText);
          res.json({ success: "trueUE", response: "we have sent you your email", data:{NewUser} })

        }
    }
  }

  catch (error) { res.json({ success: "falseVAL", from: "Signup", response: "EL correo ya esta en uso", error: error }) }
 
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
            usuario.connected = true
            await usuario.save()
            res.json({ success: true, from: "controller", response: { token, datoUser } })
          }
          else { res.json({ success: false, from: "controller", error: "el usuario y/o contraseña son incorrecto" }) }

        }
        else { res.json({ success: false, from: "controller", error: "verifica tu email para validarlo " }) }

      }

    } catch (error) { console.log(error); res.json({ success: false, response: null, error: error }) }

  },

cerrarsesion: async (req, res) => {

    const email = req.body.email
  

    const user = await User.findOne({ email })

    user.connected = false

    await user.save()
    res.json({ success: true, response: "Cerrar sesion" })

  }

}
module.exports = usersController