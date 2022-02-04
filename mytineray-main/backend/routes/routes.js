const Router = require("express").Router();
const citiesController = require("../controller/datosControllers")// revisar esta ruta 
const {ObtenerTodosLosDatos} = citiesController // desestructuración del controlador de Ciudades

Router.route("/datos") // "datos" parte de la url de la consulta
.get(ObtenerTodosLosDatos)

module.exports = Router