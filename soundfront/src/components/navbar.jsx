// Navbar.jsx
import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "../styles/home.css";
import logo from "../img/logo.png";

const Navbar = ({ toRef, activeSection, setActiveSection }) => {
    const navigate = useNavigate();
    const location = useLocation();
    const [isScrolled, setIsScrolled] = useState(false);
    // const [activeSection, setActiveSection] = useState("");

    useEffect(() => {
        const sections = ["home", "why", "expect", "additional", "who", "example", "contact"];
        const options = { threshold: 0.4 };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);

                    // scroll to section (optional scroll effect)
                    // const link = document.getElementById(`link-${entry.target.id}`);
                    // if (link) {
                    //     link.scrollIntoView({ behavior: "smooth", block: "start" });
                    // }
                }
            });
        }, options);

        sections.forEach(id => {
            const el = document.getElementById(id);
            if (el) observer.observe(el);
        });

        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleClick = (e, section) => {
        const myOffcanvas = document.getElementById("offcanvasDarkNavbar");
        const bsOffcanvas = new bootstrap.Offcanvas(myOffcanvas);
        bsOffcanvas.hide();
        toRef(section);
    };

    const handleClickHome = () => navigate("/");
    const handleClickExamples = () => navigate("/examples");

    return (
        <nav className={`navbar fixed-top ${isScrolled ? "scrolled" : ""}`} data-bs-backdrop="static">
            <div className="container-fluid">
                <h1 className="navbar-brand text-light">
                    <img src={logo} className="logo" alt="Curso de DJ online con práctica en club en Barcelona" />
                </h1>
                <button
                    className="navbar-toggler custom-toggler"
                    type="button"
                    id="OpenMenu"
                    data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasDarkNavbar"
                    aria-controls="offcanvasDarkNavbar"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div
                    className="offcanvas offcanvas-end menu_container"
                    tabIndex="-1"
                    id="offcanvasDarkNavbar"
                    aria-labelledby="offcanvasDarkNavbarLabel"
                >
                    <div className="offcanvas-header">
                        <h5 className="offcanvas-title title"></h5>
                        <button
                            type="button"
                            className="btn-close btn-close-white"
                            data-bs-dismiss="offcanvas"
                            aria-label="Close"
                        ></button>
                    </div>
                    <div className="offcanvas-body">
                        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3 text-start ps-4">
                            {location.pathname === "/examples" ? (
                                <li className="nav-item">
                                    <a
                                        className="nav-link text-light"
                                        href="#"
                                        data-bs-dismiss="offcanvas"
                                        onClick={handleClickHome}
                                    >
                                        Home
                                    </a>
                                </li>
                            ) : (
                                ["home", "expect", "additional", "who", "why", "example", "contact"].map(section => (
                                    <li key={section} id={`link-${section}`} className="nav-item">
                                        {section === "example" ? (
                                            <a
                                                className={`nav-link ${location.pathname === "/examples" ? "active-link" : "text-light"}`}
                                                href="#"
                                                data-bs-dismiss="offcanvas"
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    handleClickExamples();
                                                }}
                                            >
                                                Ejemplos realizados por alumnos
                                            </a>
                                        ) : (
                                            <a
                                                className={`nav-link ${activeSection === section ? "active-link" : "text-light"}`}
                                                href="#"
                                                data-bs-dismiss="offcanvas"
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    handleClick(e, section);
                                                }}
                                            >
                                                {section === "expect" && "¿Qué puedes esperar de estudiar producción musical con Ableton Live?"}
                                                {section === "additional" && "¿Qué ofrecemos?"}
                                                {section === "who" && "¿Quién puede aprender con nosotros?"}
                                                {section === "why" && "¿Por qué Ableton Live?"}
                                                {section === "contact" && "Contacto"}
                                                {section === "home" && "Home"}
                                            </a>
                                        )}
                                    </li>
                                ))
                            )}
                        </ul>

                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
