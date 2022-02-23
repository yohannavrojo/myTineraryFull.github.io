const Router = require("express").Router();
const datosController = require("../controller/datosControllers")// revisar esta ruta 
const {ObtenerTodosLosDatos, ObtenerItynerarios} = datosController // desestructuración del controlador de Ciudades

Router.route("/datos") // "datos" parte de la url de la consulta
.get(ObtenerTodosLosDatos)

Router.route("/itinerary") // "datos" parte de la url de la consulta
.get(ObtenerItynerarios)

module.exports = Router