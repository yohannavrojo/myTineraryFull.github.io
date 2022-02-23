import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/general/Home";
import Cities from "./components/general/Cities";
import Signup from "./components/sign/Signup";
import Signin from "./components/sign/Signin";
import axios from "axios";
import Navbar from "./components/Navbar/Navbar";
import FooterContainer from "./components/footer/footer";
import CITY from "./components/City/CITY.js";
import { actionType, initialState } from "./reducer";
import { useStateValue } from "./StateProvider";


export default function App() {
 const [{cities,itineraries},dispatch]=useStateValue()

  const data = []


useEffect(()=>{
  axios.get("http://localhost:4000/api/datos")
   .then(response =>{
    
      dispatch({
        type:actionType.CITIESDB,
        cities:response.data.response.cities})
     
      })
      
  //     axios.get("http://localhost:4000/api/itinerary")
  //  .then(response => {
  //     dispatch({
  //       type:actionType.ITINERARIESDB,
  //      itineraries:response.data.response.itinerary //este itinerary declarado datacontroller
  //     })
     
      // });

 },[]) 

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/Cities" element={<Cities />} /> 
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Signin" element={<Signin />} />
         <Route path="/CITY/:id" element={<CITY />} /> 
        <Route path="*" element={<Home/>} />
      </Routes>

      <FooterContainer />
    </BrowserRouter>
  );
}


