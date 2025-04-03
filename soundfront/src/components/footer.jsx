import React from "react";
import "../styles/footer.css"

import logo from "../img/logo.png"

const Footer = () => {
    
    
    
    
    
    return (
        <>
            <div class="container-fluid footer pt-3 m-0">
                <footer class=" mx-5 footer_container">
                    <div class="col-4 d-flex align-items-center footer_logo_container">
                        <h1 className="" href="#"><img src={logo} className="logo" alt="..."/></h1>
                    </div>

                    <ul class=" col-4  list-unstyled  footer_icons_container">
                        <li class="ms-3">
                            <i class="fa-brands fa-facebook fa-xl text-white footer_icon"></i>
                        </li>
                        <li class="ms-3">
                            <i class="fa-brands fa-instagram fa-xl text-white footer_icon"></i>
                        </li>
                        <li class="ms-3">
                            <i class="fa-brands fa-linkedin-in fa-xl text-white footer_icon"></i>
                        </li>
                    </ul>
                </footer>
            </div>
        </>

    )

}


export default Footer