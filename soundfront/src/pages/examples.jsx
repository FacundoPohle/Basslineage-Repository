import React, { useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import "../styles/home.css";
import "../styles/expect.css";
import "../styles/aditional.css";
import "../styles/who.css";
import "../styles/examples.css";
import "../styles/contact.css";
import ExamplesCards from "../components/examples"
import banner from "../img/banner.jpg"
import logo from "../img/logo.png"


const Examples = () => {

    const handleToRef = () => {};

    return (<>
        <div className="container-fluid m-0 p-0">
            <div className="home-container m-0">
            <Navbar toRef={handleToRef}/>
            <ExamplesCards/>
            </div>
        </div>


        <Footer />

    </>);
}

export default Examples;