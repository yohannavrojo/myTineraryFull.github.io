const Cities = require("../models/cities")

const citiesController = {
    ObtenerTodosLosDatos:async(req,res) => { // recibe una peticion y en relacion a esta da una respuesta 
      
        let cities
        let error = null

        try {
            cities = await Cities.find() // declaramos primero como funcion asicrona y luego esperamos una respuesta para no esperarla vacia 
            
        } catch (err) {
            error = err
            console.log(error);
            
        }

        res.json({// armamos operadores ternarios 
            response:error?"ERROR":{cities},
            success:error?false:true,
            error:error
        })

    } // req=require res=response
}

module.exports = citiesController