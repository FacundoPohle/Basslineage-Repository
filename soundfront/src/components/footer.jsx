import React from "react";
import "../styles/footer.css"

import logo from "../img/logo.png"
import logo1 from "../img/logo1.png"
import logo2 from "../img/logo2.png"

const Footer = () => {





    return (
        <>
            <div class="container-fluid footer pt-3 m-0">
                <footer class=" mx-5 footer_container">
                    <div class="col-4 d-flex align-items-center footer_logo_container">
                        <h1 className="" href="#"><img src={logo} className="logo" alt="..." /></h1>

                    </div>

                    <ul className="col-4 list-unstyled footer_icons_container">
                        <li className="ms-3">
                            <a href="https://www.instagram.com/aqv_productora?igsh=bzR3a3hyYmZuM2c3" target="_blank" rel="noopener noreferrer">
                                <img src={logo1} className="logo1" alt="Instagram AQV Productora" />
                            </a>
                        </li>
                        <li className="ms-3">
                            <a href="https://www.instagram.com/poison777recs?igsh=OXd1dWRmOGl6Zzcy" target="_blank" rel="noopener noreferrer">
                                <img src={logo2} className="logo1" alt="Instagram Poison777 Recs" />
                            </a>
                        </li>
                        <li className="ms-3 mt-4">
                            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                                <i className="fa-brands fa-facebook fa-xl text-white footer_icon"></i>
                            </a>
                        </li>
                        <li className="ms-3 mt-4">
                            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                                <i className="fa-brands fa-instagram fa-xl text-white footer_icon"></i>
                            </a>
                        </li>
                        <li className="ms-3 mt-4">
                            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                                <i className="fa-brands fa-linkedin-in fa-xl text-white footer_icon"></i>
                            </a>
                        </li>
                    </ul>

                </footer>
            </div>
        </>

    )

}


export default Footer