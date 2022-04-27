const Router = require("express").Router();
const passport=require("../config/passport")
const datosController = require("../controller/datosControllers");// revisar esta ruta 
const {ObtenerTodosLosDatos, ObtenerItynerarios, likeDislike} = datosController // desestructuración del controlador de Ciudades
const usersController= require ("../controller/usersControllers.js")
const {nuevoUsuario, verifyEmail,accesoUsuario,cerrarsesion,verificarToken} = usersController
const validator= require("../controller/validator.js")
const commentControllers= require("../controller/comentariosControllers")
const {cargaComentarios,obtenerComentarios,borrarComentario,modificarComentario}=commentControllers


Router.route("/datos") // "datos" parte de la url de la consulta
.get(ObtenerTodosLosDatos)

Router.route("/itinerary/:city") // "datos" parte de la url de la consulta 
.get(ObtenerItynerarios)


Router.route("/signup")
.post(validator,nuevoUsuario)

Router.route("/verify/:uniqueText") // "datos" parte de la url de la consulta 
.get(verifyEmail)

Router.route("/signin") // "datos" parte de la url de la consulta 
.post(accesoUsuario)

Router.route("/signOut") // "datos" parte de la url de la consulta 
.post(cerrarsesion)

Router.route("/comments")
.post(cargaComentarios)

Router.route("/comments/:id")
.get(obtenerComentarios)
.delete(borrarComentario)
.put(modificarComentario)

Router.route("/signinToken")
.get(passport.authenticate("jwt",{session:false}),verificarToken)


Router.route("/likeDislike/:id")
.put(passport.authenticate("jwt",{session:false}),likeDislike)

module.exports = Router