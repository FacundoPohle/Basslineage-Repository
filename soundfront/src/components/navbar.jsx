// Navbar.jsx
import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import "../styles/home.css";
import logo from "../img/logo.png";
// ⚠️ Asegurate de tenerlo una sola vez en la app (mejor en main.jsx)
// import "bootstrap/dist/js/bootstrap.bundle.min.js";

const Navbar = ({ toRef, activeSection = "", setActiveSection }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);

  // ¿Estoy en Home y tengo función de scroll?
  const hasSections = location.pathname === "/" && typeof toRef === "function";
  const canSetActive = typeof setActiveSection === "function";

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // SOLO observar secciones en Home y si el padre nos pasa setActiveSection
  useEffect(() => {
    if (!hasSections || !canSetActive) return;

    const ids = ["home", "why", "expect", "additional", "who", "contact"];
    const options = { threshold: 0.5 };
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) setActiveSection(entry.target.id);
      });
    }, options);

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });

    return () => obs.disconnect();
  }, [hasSections, canSetActive, setActiveSection]);

  const closeOffcanvas = () => {
    const el = document.getElementById("offcanvasDarkNavbar");
    // Si el bundle de Bootstrap está disponible, cerramos elegante
    if (el && window.bootstrap && window.bootstrap.Offcanvas) {
      const inst =
        window.bootstrap.Offcanvas.getInstance(el) ||
        new window.bootstrap.Offcanvas(el);
      inst.hide();
    }
  };

  const handleClickSection = (e, section) => {
    e.preventDefault();
    closeOffcanvas();

    if (hasSections) {
      // Estamos en Home: scrolleo directo
      setTimeout(() => toRef(section), 250);
    } else {
      // Otra página: navego a Home y luego scrolleo
      navigate(`/#${section}`);
      setTimeout(() => {
        const el = document.getElementById(section);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 0);
    }
  };

  const goHome = (e) => {
    e.preventDefault();
    closeOffcanvas();
    navigate("/");
  };

  return (
    <nav className={`navbar fixed-top ${isScrolled ? "scrolled" : ""}`} data-bs-backdrop="static">
      <div className="container-fluid">
        <h1 className="navbar-brand text-light" onClick={goHome} style={{ cursor: "pointer" }}>
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

        <div className="offcanvas offcanvas-end menu_container" tabIndex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
          <div className="offcanvas-header">
            <h5 className="offcanvas-title title"></h5>
            <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>

          <div className="offcanvas-body">
            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3 text-start ps-4">
              {/* Si NO estoy en Home, muestro un link para volver al Home */}
              {location.pathname !== "/" ? (
                <>
                  <li className="nav-item">
                    <Link className="nav-link text-light" to="/" onClick={closeOffcanvas}>
                      Home
                    </Link>
                  </li>
                </>
              ) : (
                // Estoy en Home: muestro secciones con scroll
                <>
                  <li className="nav-item">
                    <a
                      className={`nav-link ${activeSection === "home" ? "active-link" : "text-light"}`}
                      href="#"
                      onClick={(e) => handleClickSection(e, "home")}
                    >
                      Home
                    </a>
                  </li>

                  <li className="nav-item">
                    <a
                      className={`nav-link ${activeSection === "expect" ? "active-link" : "text-light"}`}
                      href="#"
                      onClick={(e) => handleClickSection(e, "expect")}
                    >
                      ¿Qué puedes esperar de estudiar producción musical con Ableton Live?
                    </a>
                  </li>

                  <li className="nav-item">
                    <a
                      className={`nav-link ${activeSection === "additional" ? "active-link" : "text-light"}`}
                      href="#"
                      onClick={(e) => handleClickSection(e, "additional")}
                    >
                      ¿Qué ofrecemos?
                    </a>
                  </li>

                  <li className="nav-item">
                    <a
                      className={`nav-link ${activeSection === "who" ? "active-link" : "text-light"}`}
                      href="#"
                      onClick={(e) => handleClickSection(e, "who")}
                    >
                      ¿Quién puede aprender con nosotros?
                    </a>
                  </li>

                  <li className="nav-item">
                    <a
                      className={`nav-link ${activeSection === "why" ? "active-link" : "text-light"}`}
                      href="#"
                      onClick={(e) => handleClickSection(e, "why")}
                    >
                      ¿Por qué Ableton Live?
                    </a>
                  </li>

                  <li className="nav-item">
                    <a
                      className={`nav-link ${activeSection === "contact" ? "active-link" : "text-light"}`}
                      href="#"
                      onClick={(e) => handleClickSection(e, "contact")}
                    >
                      Contacto
                    </a>
                  </li>

                  <li className="nav-item">
                    <Link
                      className={`nav-link ${location.pathname === "/examples" ? "active-link" : "text-light"}`}
                      to="/examples"
                      onClick={closeOffcanvas}
                    >
                      Ejemplos realizados por alumnos
                    </Link>
                  </li>
                </>
              )}

              {/* Estos deberían verse SIEMPRE (desde cualquier página) */}
              <li className="nav-item">
                <Link
                  className={`nav-link ${location.pathname === "/privacy" ? "active-link" : "text-light"}`}
                  to="/privacy"
                  onClick={closeOffcanvas}
                >
                  Política de Privacidad
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  className={`nav-link ${location.pathname === "/thanks" ? "active-link" : "text-light"}`}
                  to="/thanks"
                  onClick={closeOffcanvas}
                >
                  Gracias
                </Link>
              </li>

            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
