import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import "../styles/privacy.css";

const Privacy = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    // Intenta volver; si no hay historial, te lleva al home
    if (window.history.length > 1) navigate(-1);
    else navigate("/");
  };

  return (
    <>
      <div className="container-fluid m-0 p-0">
        <Navbar />

        {/* Breadcrumb + Volver */}
        <div className="privacy-crumbs px-4">
          <button
            type="button"
            className="back-btn"
            onClick={handleBack}
            aria-label="Volver"
          >
            {/* Ícono flecha (SVG) para no depender de libs */}
            <svg width="18" height="18" viewBox="0 0 24 24" className="back-icon" aria-hidden="true">
              <path d="M15 18l-6-6 6-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Volver
          </button>

          <nav className="privacy-breadcrumb" aria-label="breadcrumb">
            <ol>
              <li>
                <Link to="/" className="breadcrumb-link">Inicio</Link>
              </li>
              <li aria-current="page" className="breadcrumb-current">
                Política de Privacidad
              </li>
            </ol>
          </nav>
        </div>

        <div className="privacy-container py-5 px-4">
          <h1 className="mb-4">Política de Privacidad</h1>
          <p><strong>Última actualización: 19-09-2024</strong></p>

          <p>
            En <strong>Basslineage</strong>, respetamos tu privacidad y estamos comprometidos a proteger la confidencialidad de los datos personales que nos proporciones.
            Este documento describe cómo recopilamos, utilizamos y protegemos tu información cuando interactúas con nuestros servicios.
          </p>

          <h3>Recopilación y uso de datos personales</h3>
          <p>
            Puedes navegar por nuestras páginas sin necesidad de proporcionar información personal.
            Sin embargo, para acceder a ciertos servicios o funciones, puede ser necesario que nos proporciones datos como nombre, teléfono, correo electrónico y datos genealógicos.
            Esta información será recopilada a través de formularios en línea y se procesará conforme a las normativas vigentes de seguridad, en especial, de acuerdo con el
            Reglamento General de Protección de Datos (RGPD) (Reglamento de la UE n.º 679/2016).
          </p>

          <h3>Seguridad de tus datos</h3>
          <p>
            Implementamos estrictas medidas técnicas y organizativas para proteger tus datos personales contra accesos no autorizados, alteración, divulgación o destrucción.
            Cumplimos con las disposiciones del artículo 32 del RGPD, garantizando un nivel adecuado de seguridad que minimice los riesgos para los derechos y libertades de las personas.
          </p>

          <h3>Anuncios y cookies</h3>
          <p>
            Nuestro sitio web puede recibir tráfico proveniente de anuncios publicitarios, incluyendo Meta Ads y Google Ads.
            En estos casos, es posible que recopilemos información adicional sobre tu interacción con los anuncios y con nuestro sitio web, como el origen de tu visita,
            páginas que has visualizado y acciones que realizas en el sitio.
          </p>
          <p>
            Utilizamos cookies para mejorar tu experiencia de usuario y analizar el rendimiento de los anuncios.
            Estas cookies permiten rastrear tus preferencias y comportamiento de navegación, lo que nos ayuda a personalizar y optimizar los contenidos y servicios que te ofrecemos.
            Puedes gestionar tus preferencias de cookies directamente en la configuración de tu navegador.
          </p>

          <h3>¿Tienes dudas?</h3>
          <p>
            Si tienes preguntas sobre cómo manejamos tu información personal, puedes contactarnos en
            <a href="mailto:basslineageacademia@gmail.com"> basslineageacademia@gmail.com</a>.
            Nuestro equipo estará disponible para resolver cualquier inquietud sobre la recopilación de datos, el uso de cookies, o cómo garantizamos la seguridad de tu información.
          </p>

          <h3>Derechos del usuario</h3>
          <p>
            Tienes el derecho a acceder, corregir, actualizar y eliminar tus datos personales en cualquier momento.
            Si deseas ejercer estos derechos, puedes escribirnos a
            <a href="mailto:basslineageacademia@gmail.com"> basslineageacademia@gmail.com</a>.
            Nos comprometemos a responder a tu solicitud con prontitud.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Privacy;
