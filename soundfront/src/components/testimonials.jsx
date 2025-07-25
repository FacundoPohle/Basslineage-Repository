import React from "react";
import "../styles/testimonials.css"

const Testimonials = () => {





    return (
        <>
            <section className="testimonials_section py-5">
                <div class="testimonial_stars text-center">★ ★ ★ ★ ★</div>
                <h2 className="testimonial_title text-center mb-5">Lo que dicen nuestros estudiantes</h2>
                <div className="container">
                    <div className="row justify-content-center ">
                        <div className="col-md-4 mb-4 who_icon">
                            <div className="testimonial_card p-4">
                                <p className="testimonial_text">“Gracias a la formación, logré producir mis primeras canciones con confianza. La energía del equipo es inigualable.”</p>
                                <p className="testimonial_author">– Martina R.</p>
                            </div>
                        </div>
                        <div className="col-md-4 mb-4 who_icon delay-1">
                            <div className="testimonial_card p-4">
                                <p className="testimonial_text">“Nunca imaginé que aprender teoría musical podía ser tan inspirador. Totalmente recomendado.”</p>
                                <p className="testimonial_author">– Lucas M.</p>
                            </div>
                        </div>
                        <div className="col-md-4 mb-4 who_icon">
                            <div className="testimonial_card p-4">
                                <p className="testimonial_text">“El enfoque personalizado me ayudó a entender mi propio ritmo. Más que una escuela, una comunidad.”</p>
                                <p className="testimonial_author">– Diego T.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>

    )

}


export default Testimonials