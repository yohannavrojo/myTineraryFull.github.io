const User = require("../models/user.js")
const bcryptjs=require("bcryptjs")

const usersController = {

    nuevoUsuario: async(req,res)=>{

      const {firstname,lastname, email,password} = req.body.NuevoUsuario
      console.log(req.body)
      try{
          const UsuarioExiste= await User.findOne({email})

          if (UsuarioExiste){
              res.json({success:"falseUE" ,response:"Usuario ya existe, te invitamos al SignIn"})//responseUE

          }
          else {
              const passwordHash = bcryptjs.hashSync(password,10)
              const NewUser= new User ({
                firstname,
                lastname,
                 email,
                 password: passwordHash
              })
              await NewUser.save()
              res.json({success:"trueUE", response:"Usuario creado Exitosamente"}) 
          }


      }
      catch (error){ res.json({success:"falseUE", response:null, error:error})}

    }

  
}
  module.exports = usersController