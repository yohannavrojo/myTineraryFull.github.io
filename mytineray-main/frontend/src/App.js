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
import Footer2 from "./components/footer/Footer2"
import CITY from "./components/City/CITY.js";
import { actionType, initialState } from "./reducer";
import { useStateValue } from "./StateProvider";

export default function App() {
  const [{ cities, itineraries }, dispatch] = useStateValue();

  const data = [];

  useEffect(() => {
    axios.get("https://mytinerary-yohanna.herokuapp.com/api/datos").then((response) => {
      dispatch({
        type: actionType.CITIESDB,
        cities: response.data.response.cities,
      });
    });

    if (localStorage.getItem("token")!== null) {
      const token = localStorage.getItem("token");
      axios.get("https://mytinerary-yohanna.herokuapp.com/api/signinToken", {
          headers:{
            "Authorization":"Bearer "+token
          }
        })
        .then((user) => {
         console.log(user)
          if (user.data.success) {
            dispatch({
              type: actionType.USER,
              user: user.data.response
            });
          } else {
            localStorage.removeItem("token");

          }
        });
    }


  }, []);

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/Cities" element={<Cities />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Signin" element={<Signin />} />
        <Route path="/CITY/:id" element={<CITY />} />
        <Route path="*" element={<Home />} />
      </Routes>

      
      <Footer2/>
    </BrowserRouter>
  );
}
