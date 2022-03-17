const Cities = require("../models/cities.js")
const Itinerary= require("../models/itinerary.js")

const datosController = {
    // datosController
    ObtenerTodosLosDatos: async(req,res) => { // recibe una peticion y en relacion a esta da una respuesta 
      
        let cities
        let error = null

        try {
            cities = await Cities.find() // declaramos primero como funcion asicrona y luego esperamos una respuesta para no esperarla vacia 
            
        } catch (err) {
            error = err
            console.log(error)
            
            }

        res.json({// armamos operadores ternarios 
            response: error? "ERROR":{cities},
            success: error? false: true,
            error: error
        })

    },

    ObtenerItynerarios:async(req,res) => {
      const city= req.params.city;
        console.log(req.params.city)
  
          let itinerary;
          let error = null
          try {           
              itinerary = await Itinerary.find({city:city}) 
              
            //   
          } catch (err) {
              error = err
              
              
          }
  
          res.json({            
              response:error?"ERROR":{itinerary},
              success:error?false:true,
              error:error
          })
  
      } 
    
}

module.exports = datosController