import React, { useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/navbar";
import Testimonials from "../components/testimonials";
import Footer from "../components/footer";
import ContactForm from "../components/contact";
import "../styles/home.css";
import "../styles/expect.css";
import "../styles/aditional.css";
import "../styles/who.css";
import "../styles/examples.css";
import "../styles/contact.css";
import compactera from "../img/compactera.png"
import djtocando from "../img/compac.png"
import logo from "../img/logo.png";



const Home = () => {

    const knowMoreRef = useRef(null)
    const ExpectRef = useRef(null)
    const AdditionalRef = useRef(null)
    const AditionalRef = useRef(null)
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

    useEffect(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        const boxes = entry.target.querySelectorAll('.aditionalinout');
        boxes.forEach((box, index) => {
          setTimeout(() => {
            box.classList.add('show');
          }, index * 300);
        });
      }
    },
    { threshold: 0.5 }
  );

  if (AditionalRef.current) {
    observer.observe(AditionalRef.current);
  }

  return () => {
    if (AditionalRef.current) {
      observer.unobserve(AditionalRef.current);
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
                    <div className="home_content_container">
                        <div class="testimonial_intro">
                            <div class="testimonial_stars">★ ★ ★ ★ ★</div>
                            <p class="testimonial_quote">"Aprendí a ser DJ y de la mano de los mejores, una experiencia que me marcó"</p>
                        </div>
                        {/* <h1 className=" text-light" href="#">
                            <img src={logo} className="logo" alt="Curso de DJ online con práctica en club en Barcelona" />
                        </h1> */}
                        <h1 className="mt-5">¿SOÑAS CON SER DJ?</h1>
                        <h3 className="mt-4 somee text-center">
                            ¡Descubrí la mejor academia en Barcelona! Pinchá música electrónica desde cero!
                        </h3>

                        {/* <h3 className="mt-4">Y prepárate para adentrarte en ésta experiencia!</h3> */}


                        <div style={{ display: "none" }}>
                            <h2>Curso de DJ Bass Lineage</h2>
                            <p>
                                Bass Lineage ofrece formación profesional en DJing y producción musical en Barcelona. Nuestra academia para DJs emergentes
                                te enseña a pinchar con CDJs Pioneer, mezclar música techno y house, y realizar presentaciones en vivo en clubes icónicos.
                                Ideal para quienes buscan un curso para ser DJ profesional desde cero.
                            </p>
                        </div>

                        <div style={{ display: "none" }}>
                            <p className="seo_text mt-3">
                                En nuestra <strong>escuela de DJs Bass Lineage</strong>, ofrecemos una <strong>formación intensiva de DJ electrónica</strong>
                                con acceso a eventos reales. Aprendé <strong>cómo mezclar música techno y house</strong>, dominar CDJs y realizar tu primera
                                <strong>DJ performance en clubs icónicos de Barcelona</strong>.
                            </p>
                        </div>


                        <button type="button" className="btn btn-primary rounded-pill contact_btn" onClick={() => { toRef("contact") }}>Reservá tu lugar !</button>

                        <div className="know_more">
                            <h4 className="know ">¿Queres saber mas?</h4>
                            <div className="arrow_div  mt-3 p-2" onClick={() => { toRef("expect") }}>
                                <i className="fa-solid fa-angle-down fa-2xl arrow" ></i>
                            </div>
                        </div>
                    </div>
                </div>
                <a
                    href="https://wa.me/34674789724?text=Hola%20!%20Vengo%20de%20la%20página%20oficial%20de%20basslineage,%20quería%20hacer%20una%20consulta!"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="whatsapp-float"
                >
                    <div className="circle">
                        <i className="fa-brands fa-whatsapp icon"></i>
                    </div>
                </a>


                <div className="banner_boxx" ref={ExpectRef} >
                    <div className="compac_container">
                        <img src={djtocando} className="compac_container_img" alt="consola" />
                    </div>
                    <div className=" pt-5 expect_col">
                        <h2 className="expect_title">¿Qué podés esperar de estudiar con nosotros?</h2>

                        <h4 className="expect_curso mt-4">Curso de mezcla DJ y producción musical</h4>
                        <p className="expect_text pt-5">
                            Este <strong>curso de DJ online y presencial</strong> te introduce en el universo del DJing y la <strong>producción musical</strong>.
                            Aprenderás desde cero a usar CDJs, mezclar pistas y dominar <strong>Ableton Live</strong> como los DJs profesionales.
                        </p>

                        {/* <p className="expect_text pt-5">
                            En nuestro curso de mezcla de Dj, te sumergirás en el emocionante mundo de
                            la música electrónica. Aprenderás desde lo basico hasta tecnicas avanzadas
                            para mezclar pistas asombrosas.
                        </p> */}
                        <p className="expect_text pt-3">
                            Habiendo finalizado el curso tendrás la posibilidad de pinchar en uno de los clubes mas icónicos del mundo 🍒, de la mano de la productora AQV producciones y sus grandes residencias.
                        </p>
                        <p className="expect_text pt-3 pb-5 ">
                            Pero eso no es todo. Tambien te enseñaremos las complejidades del mundo de la producción musical, guiándote en el
                            proceso de mezcla y masterización, poniendo un énfasis especial en la calidad sonora. Exploraremos el uso
                            experto de compresores, ecualizadores y exitación hipoacústica para garantizar que cada nota, cada ritmo
                            y cada detalle se perciban con una claridad y profundidad excepcionales.
                        </p>
                        <a href="https://wa.me/34674789724?text=Hola%20!%20Vengo%20de%20la%20página%20oficial%20de%20basslineage,%20quería%20hacer%20una%20consulta!"
                            target="_blank"
                            rel="noopener noreferrer">

                            <button type="button" className="btn btn-primary rounded-pill extra contact_aditional_btn mb-5">¡Quiero mas información!</button>

                        </a>
                    </div>
                </div>
                <div className="row additional_container m-0" ref={AdditionalRef} >
                    <div className="col  aditional_col">
                        <div className="row w-100 d-flex justify-content-center">
                            <h2 className="aditional_title mt-5">¿Qué ofrecemos?</h2>
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
                                <h3 className="mt-3 aditional_subtitle">Agenda<br /> de clases</h3>
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
                            <button type="button" className="btn btn-primary rounded-pill contact_aditional_btn " onClick={() => { toRef("contact") }}>¡Quiero empezar ahora!</button>
                        </div>
                    </div>

                </div>


                <div className="row know_more_container m-0 " ref={knowMoreRef}>
                    <div className="col-12 col-sm-6 computer_container">
                        <img src={compactera} className="computer_img" alt="Curso de DJ online con práctica en club en Barcelona" />
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
                        <a href="https://wa.me/34674789724?text=Hola%20!%20Vengo%20de%20la%20página%20oficial%20de%20basslineage,%20quería%20hacer%20una%20consulta!"
                            target="_blank"
                            rel="noopener noreferrer">

                            <button type="button" className="btn btn-primary rounded-pill extra contact_aditional_btn mb-5 mt-5">¿Cómo comienzo?</button>

                        </a>
                    </div>
                </div>
                <div className="container-fluid expect_container m-0" ref={AditionalRef}>
                    <div className="row justify-content-start">

                        <div className="aditionalinout add1 col-12 col-lg-4 p-5 p-lg-5">
                            <h3 className="expect_texttitle">👤 ¿Para quién es este curso?</h3>
                            <div className="expect_text-sm mt-2">

                                <p>✅ Sin experiencia previa: empezá desde cero.</p>
                                <p>✅ DJs autodidactas: llevá tu técnica al siguiente nivel.</p>
                                <p> ✅ Productores musicales: dominá Ableton Live.</p>
                                <p>✅ Músicos: explorá el universo de la electrónica.</p>
                            </div>
                        </div>

                        <div className="aditionalinout add2 col-12 col-lg-4 p-5 p-lg-5">
                            <h3 className="expect_texttitle">🎛️ Módulo 1: Curso de DJing Presencial</h3>
                            <div className="expect_text-sm mt-2">
                                <p> Aprendé a mezclar como un profesional y conquistá la pista de baile:</p>
                                <p>- Manejo completo de CDJ Pioneer y mixer profesional</p>
                                <p>- Beatmatching, mezcla armónica y técnicas avanzadas</p>
                                <p>- Selección musical, estructura de sets y lectura del público</p>
                                <p >- Branding artístico, marketing y booking de fechas</p>
                                <p> 📍 Incluye actuación final en un club icónico de Barcelona</p>
                            </div>
                        </div>

                        <div className="aditionalinout add3 col-12 col-lg-4 p-5 p-lg-5">
                            <h3 className="expect_texttitle">🎹 Módulo 2: Producción Musical con Ableton Live</h3>
                            <div className="expect_text-sm mt-2">
                                <p className=" mb-5">
                                    Creá tu propio sonido y temas originales:

                                </p>
                                <p> - Fundamentos de Ableton y flujo creativo</p>
                                <p>- Creación de ritmos, bajos, sintetizadores y efectos</p>
                                <p>  - Técnicas de mezcla y mastering básico</p>
                                <p>- Exportación para DJs, plataformas digitales y sellos</p>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="row who_container m-0" ref={WhoRef}>
                    <div className="col  who_col ">
                        <div className="row w-100 d-flex justify-content-center">
                            <h2 className="aa_title mt-5">¿Quién puede aprender con nosotros?</h2>
                            <h2 className=" who_title">¡Todos pueden!</h2>
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
                        <div className="mt-5 mb-5">
                            <h3 className="mt-md-3  join_text">
                                ¡Únete a nosotros y prepárate para transformar tus sueños musicales en realidad!
                            </h3>
                        </div>
                    </div>
                </div>
                <Testimonials />

                <ContactForm ref={ContactRef} />
            </div>
            <Footer />

        </>
    )
}


export default Home

