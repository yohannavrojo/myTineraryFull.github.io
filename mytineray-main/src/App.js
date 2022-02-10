import React from "react";
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

export default function App() {
  const data = []
  axios.get("http://localhost:4000/api/datos")

    .then((response) => {
      data.push(...response.data.response.cities);
      console.log(data);
    });

    const itinerary = []

  axios.get("http://localhost:4000/api/itinerary")
  .then(response => {
    itinerary.push(response.data.response.itinerary)   
  })

  

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/Cities" element={<Cities />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Signin" element={<Signin />} />
        <Route path="/CITY" element={<CITY />} />
      </Routes>

      <FooterContainer />
    </BrowserRouter>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
