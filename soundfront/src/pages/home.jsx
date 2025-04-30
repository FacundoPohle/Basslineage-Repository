import React, { useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import ContactForm from "../components/contact";
import "../styles/home.css";
import "../styles/expect.css";
import "../styles/aditional.css";
import "../styles/who.css";
import "../styles/examples.css";
import "../styles/contact.css";
import compactera from "../img/compactera.png"
import banner from "../img/banner.jpg"
import logo from "../img/logo.png"


const Home = () => {

    const knowMoreRef = useRef(null)
    const ExpectRef = useRef(null)
    const AdditionalRef = useRef(null)
    const WhoRef = useRef(null)
    const ExamplesRef = useRef(null)
    const ContactRef = useRef(null)


    const toRef = (section) => {
        let ref
        switch (section) {
            case "expect":
                ref = ExpectRef
                break
            case 'know_more':
                ref = knowMoreRef
                break;
            case "additional":
                ref = AdditionalRef
                break;
            case 'who':
                ref = WhoRef
                break;
            case "example":
                ref = ExamplesRef
                break;
            case "contact":
                ref = ContactRef
                break
        }

        if (ref && ref.current) {
            ref.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    entry.target.querySelector('.computer_img').classList.add('show');
                    entry.target.querySelector('.about_text').classList.add('show');
                }
            },
            { threshold: 0.5 } // Ajusta este valor según cuándo quieras que la animación se dispare
        );

        if (knowMoreRef.current) {
            observer.observe(knowMoreRef.current);
        }

        return () => {
            if (knowMoreRef.current) {
                observer.unobserve(knowMoreRef.current);
            }
        };
    }, []);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    const boxes = entry.target.querySelectorAll('.additional_content_box');
                    boxes.forEach((box, index) => {
                        setTimeout(() => {
                            box.classList.add('show');
                        }, index * 300); // Ajusta el tiempo para que las animaciones se desfasen
                    });
                }
            },
            { threshold: 0.5 } // Ajusta el umbral según necesites
        );

        if (AdditionalRef.current) {
            observer.observe(AdditionalRef.current);
        }

        return () => {
            if (AdditionalRef.current) {
                observer.unobserve(AdditionalRef.current);
            }
        };
    }, []);

    const navigate = useNavigate()

    const handleClick = () => {
        navigate('/examples');
    };


    return (
        <>
            <div className="container-fluid m-0 p-0">
                <div className="home-container m-0">
                    <Navbar toRef={toRef} />
                    <div className=" text-start ms-sm-5 ps-sm-5  home_content_container">
                        <h1>¡Descubre tu pasión por la el arte de la música electrónica!</h1>
                        <h3 className="mt-4">Y prepárate para adentrarte en ésta experiencia!</h3>
                        <button type="button" className="btn btn-primary rounded-pill contact_btn mt-5" onClick={() => { toRef("contact") }}>Contactarme</button>
                        <div className="know_more">
                            <h4 className="know ">¿Queres saber mas?</h4>
                            <div className="arrow_div  mt-3 p-2" onClick={() => { toRef("know_more") }}>
                                <i className="fa-solid fa-angle-down fa-2xl arrow" ></i>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row know_more_container m-0 " ref={knowMoreRef}>
                    <div className="col-12 col-sm-6 computer_container">
                        <img src={compactera} className="computer_img" alt="..." />
                    </div>
                    <div className="col-12 col-sm-6 about_text">
                        <p className="about"><strong>Si alguna vez soñaste con convertirte en Dj o productor musical y pinchar tus pistas en los
                            escenarios mas grandes del mundo, ¡estas en el lugar adecuado!</strong>
                        </p>
                        <p className="about">
                            Imagina una pintura en la que cada color tiene su espacio, su intensidad y su matiz perfecto. <strong>La mezcla musical</strong> es exactamente eso, pero con sonidos. Es el arte de equilibrar emociones, darle profundidad a los susurros y presencia a los gritos, creando una atmósfera donde cada elemento respira en armonía, y puede inclusive hacerte vibrar con ella entonces.
                        </p>
                        <p className="about">
                            La producción musical es un arte emocionante y creativo que te permite dar vida a tus
                            ideas sonoras. ¿Y que mejor manera de empezar que con <strong>Ableton Live</strong>, una de las plataformas mas potentes y
                            versatiles a del mundo para la creacion musical?
                        </p>
                    </div>
                </div>
                <div className="banner_boxx m-0 p-0" ref={ExpectRef} >
                    <div className="col pt-5 expect_col">
                        <h2 className="expect_title">¿Qué podés esperar de estudiar con nosotros?</h2>


                        <p className="expect_text pt-5">
                            En nuestro curso de mezcla de Dj, te sumergirás en el emocionante mundo de
                            la música electrónica. Aprenderás desde lo basico hasta tecnicas avanzadas
                            para mezclar pistas asombrosas.
                        </p>
                        <p className="expect_text pt-3">
                            Habiendo finalizado el curso tendrás la posibilidad de pinchar en uno de los clubes mas icónicos del mundo 🍒, de la mano de la productora AQV producciones y sus grandes residencias.
                        </p>
                        <p className="expect_text pt-3 mb-5 pb-5 ">
                            Pero eso no es todo. Tambien te enseñaremos las complejidades del mundo de la producción musical, guiándote en el
                            proceso de mezcla y masterización, poniendo un énfasis especial en la calidad sonora. Exploraremos el uso
                            experto de compresores, ecualizadores y exitación hipoacústica para garantizar que cada nota, cada ritmo
                            y cada detalle se perciban con una claridad y profundidad excepcionales.
                        </p>
                    </div>
                </div>
                <div className="container-fluid expect_container m-0">
                    <div className="row justify-content-start  pt-4 pb-4 ps-4 pe-4">

                        <div className="col-12 col-lg-4 mt-3 text-start">
                            <h3 className="expect_texttitle">👤 ¿Para quién es este curso?</h3>
                            <p className="expect_text-sm">
                                ✅ Sin experiencia previa: empezá desde cero.<br />
                                ✅ DJs autodidactas: llevá tu técnica al siguiente nivel.<br />
                                ✅ Productores musicales: dominá Ableton Live.<br />
                                ✅ Músicos: explorá el universo de la electrónica.
                            </p>
                        </div>

                        <div className="col-12 col-lg-4 mt-3 text-start">
                            <h3 className="expect_texttitle">🎛️ Módulo 1: Curso de DJing Presencial</h3>
                            <p className="expect_text-sm">
                                Aprendé a mezclar como un profesional y conquistá la pista de baile:<br />
                                - Manejo completo de CDJ Pioneer y mixer profesional<br />
                                - Beatmatching, mezcla armónica y técnicas avanzadas<br />
                                - Selección musical, estructura de sets y lectura del público<br />
                                - Branding artístico, marketing y booking de fechas<br />
                                📍 Incluye actuación final en un club icónico de Barcelona
                            </p>
                        </div>

                        <div className="col-12 col-lg-4 mt-3 text-start">
                            <h3 className="expect_texttitle">🎹 Módulo 2: Producción Musical con Ableton Live</h3>
                            <p className="expect_text-sm mb-5">
                                Creá tu propio sonido y temas originales:<br />
                                - Fundamentos de Ableton y flujo creativo<br />
                                - Creación de ritmos, bajos, sintetizadores y efectos<br />
                                - Técnicas de mezcla y mastering básico<br />
                                - Exportación para DJs, plataformas digitales y sellos
                            </p>
                        </div>

                    </div>
                </div>





                <div className="row additional_container m-0" ref={AdditionalRef} >
                    <div className="col  aditional_col">
                        <div className="row w-100 d-flex justify-content-center">
                            <h2 className="aditional_title mt-5">¿Qué ofrecemos adicionalmente?</h2>
                        </div>
                        <div className="row aditional_row">
                            <div className="col-5 additional_content_box  ">
                                <h3 className="mt-3 aditional_subtitle">Samples<br /> exclusivos</h3>
                                <p className="mt-3 aditional_text">
                                    Al inscribirte, recibirás una colección exclusiva de samples seleccionados cuidadosamente para inspirarte
                                    desde el primer dia. Estos samples te darán una base sólida para comenzar tus primeras
                                    producciones musicales.
                                </p>
                            </div>
                            <div className="col-5 additional_content_box ">
                                <h3 className="mt-3 aditional_subtitle">Aprendizaje<br /> rapido</h3>
                                <p className="mt-3 aditional_text">
                                    En tan sólo 4 meses, te brindaremos las herramientas básicas de mezcla con CDJ. Nuestro enfoque
                                    práctico y personalizado te permitirá progresar rápidamente y comenzar a pinchar tus pistas favoritas de inmediato.
                                </p>
                            </div>
                        </div>
                        <div className="row aditional_row ">
                            <div className="col-5 additional_content_box ">
                                <h3 className="mt-3 aditional_subtitle">Agendá<br /> tus clases</h3>
                                <p className="mt-3 aditional_text">
                                    Acordaremos las bases y horarios de trabajo para desenvolverte en ésta capacitación. No dejes que tu música se quede a medias. Reservá tu clase y empieza a mezclar como un profesional.
                                </p>
                            </div>
                            <div className="col-5 additional_content_box ">
                                <h3 className="mt-3 aditional_subtitle">Variedad de <br /> opciones</h3>
                                <p className="mt-3 aditional_text">
                                    Si prefieres explorar por tu cuenta primero, también ofrecemos acceso a una variedad de cursos pregrabados de
                                    diferentes géneros e industrias, haciendo hincapié en todos los subgeneros de la musica electrónica. Así puedes
                                    aprender a tu propio ritmo y segun tus intereses antes de unirte a las clases en vivo.
                                </p>
                            </div>
                        </div>
                        <div className="row aditional_buton_row">
                            <button type="button" className="btn btn-primary rounded-pill contact_aditional_btn " onClick={() => { toRef("contact") }}>¡Quiero hacer el curso!</button>
                        </div>
                    </div>

                </div>

                <div className="row who_container m-0" ref={WhoRef}>
                    <div className="col  who_col ">
                        <div className="row w-100 d-flex justify-content-center">
                            <h2 className=" mt-5">¿Quién puede aprender con nosotros?</h2>
                            <h2 className=" who_title mt-2">¡Todos pueden!</h2>
                        </div>
                        <div className="row who_first_row ">
                            <p className="who_text">
                                En nuestro curso, creemos firmemente que la música y la producción no tienen barreras. No importa tu nivel
                                de experiencia o habilidad musical. Todos tienen la capacidad de aprender y crecer. Nuestros instructores son
                                apasionados expertos en el campo, con años de experiencia y conocimientos didácticos, dispuestos a
                                guiarte en cada paso del camino.
                            </p>
                        </div>
                        <div className="row who_first_row mt-sm-5 mt-3">
                            <p className="who_text aqua_text">
                                Recuerda, los grandes artistas no nacen ¡se hacen! Con la dedicación adecuada y la guía correcta, puedes
                                llevar tus sueños musicales mas allá de lo que alguna vez imaginaste.
                            </p>
                        </div>

                        <div className="whoparraf mt-4">
                        <h3 className="expect_texttitle pb-3 mb-3">🕓 Detalles del Curso</h3>
                            <p className="who_text whoalign text-start">
                                📅 Duración: 4 meses<br />
                                📍 Ubicación: Barcelona (presencial)<br />
                                ⏰ Horario: Flexible, adaptado al estudiante<br />
                                👥 Grupos reducidos – plazas limitadas
                            </p>
                        </div>


                    </div>

                </div>
                <div className="row examples_container m-0" ref={ExamplesRef}>
                    <div className="col examples_col">
                        <div className="row w-100 d-flex justify-content-center">
                            <h2 className=" example_title mt-5">¿Por qué Ableton Live?</h2>
                        </div>

                        <div className="example_row">
                            <p className="example_text">
                                Ableton Live no es sólo una herramienta, es un lienzo en blanco esperando tus pinceladas musicales. Su interfaz
                                intuitiva y potente te permite experimentar y crear sin límites. Desde la producción en
                                tiempo real hasta la manipulación de audio y la síntesis, Ableton Live es la opción preferida de los
                                profesionales de la industria musical.
                            </p>
                        </div>

                        <div className="row contact_examples_row">
                            <button
                                type="button"
                                className="btn btn-primary rounded-pill contact_examples_btn"
                                onClick={handleClick}
                            >
                                Escuchá los ejemplos
                            </button>
                        </div>
                        <div className="row d-flex justify-content-center mt-5 mb-5">
                            <h3 className="mt-md-3  join_text">
                                ¡Únete a nosotros y prepárate para transformar tus sueños musicales en realidad!
                            </h3>
                        </div>
                    </div>
                </div>

                <ContactForm ref={ContactRef} />
            </div>
            <Footer />

        </>
    )
}


export default Home

