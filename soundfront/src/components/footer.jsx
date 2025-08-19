import React from "react";
import { Link } from "react-router-dom";
import "../styles/footer.css";

import logo from "../img/logo.png";
import logo1 from "../img/logo1.png";
import logo2 from "../img/logo2.png";
import logo3 from "../img/eraser.png";
import logo4 from "../img/iluminati.png";
import logo5 from "../img/paris.png";

const Footer = () => {
  return (
    <>
      <div className="container-fluid footer pt-3 m-0">
        <footer className="mx-5 footer_container">
          <div className="col-4 d-flex align-items-center footer_logo_container">
            {/* Si querés que el logo lleve al home, podés envolverlo con <Link to="/"> */}
            <h1 className="m-0">
              <img
                src={logo}
                className="logo"
                alt="Curso de DJ online con práctica en club en Barcelona"
              />
            </h1>
          </div>

          <ul className="col-4 list-unstyled footer_icons_container">
            <li className="ms-3">
              <a
                href="https://www.instagram.com/eraser.prod?igsh=MWNxcW01MnhzY2h5cA=="
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={logo3} className="logo1" alt="Instagram Erase" />
              </a>
            </li>
            <li className="ms-3">
              <a
                href="https://www.instagram.com/aqv_productora?igsh=bzR3a3hyYmZuM2c3"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={logo1} className="logo1" alt="Instagram AQV Productora" />
              </a>
            </li>
            <li className="ms-3">
              <a
                href="https://www.instagram.com/poison777recs?igsh=OXd1dWRmOGl6Zzcy"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={logo2} className="logo1" alt="Instagram Poison777 Recs" />
              </a>
            </li>
            <li className="ms-3 mb-2">
              <a
                href="https://www.instagram.com/poison777recs?igsh=OXd1dWRmOGl6Zzcy"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={logo4} className="logo2" alt="Instagram Poison777 Recs" />
              </a>
            </li>
            <li className="ms-3 mb-2">
              <a
                href="https://www.instagram.com/poison777recs?igsh=OXd1dWRmOGl6Zzcy"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={logo5} className="logo2" alt="Instagram Poison777 Recs" />
              </a>
            </li>
            <li className="ms-3 mb-3 inst">
              <a
                href="https://www.instagram.com/bass.lineageacademia?igsh=MTZ6Y2MxbWcycWZ0cw%3D%3D&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-instagram fa-xl text-white footer_icon"></i>
              </a>
            </li>

            {/* 🔹 Política de Privacidad alineada como un item más */}
            <li className="ms-3 footer_link_item">
              <Link to="/privacy" className="text-white footer_link">
                Política de Privacidad
              </Link>
            </li>
          </ul>
        </footer>
      </div>
    </>
  );
};

export default Footer;
