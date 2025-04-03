import { useState, forwardRef } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

const ContactForm = forwardRef((props, ref) => {
    const [form, setForm] = useState({
        nombre: "",
        email: "",
        telefono: "",
        mensaje: "",
    });

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs
            .send(
                "service_r7jh3qf",  // Reemplázalo con tu Service ID de Email.js
                "template_09h4wpw", // Reemplázalo con tu Template ID
                form,
                "y9_Gged1W1L6cMB3q"   // Reemplázalo con tu Public Key
            )
            .then(
                () => {
                    Swal.fire({
                        title: "¡Enhorabuena!",
                        text: "Tu formulario ha sido enviado con éxito.",
                        icon: "success",
                    });
                    setForm({ nombre: "", email: "", telefono: "", mensaje: "" });
                },
                (error) => {
                    Swal.fire({
                        icon: "error",
                        title: "Oops...",
                        text: "Algo salió mal.",
                        footer: '<a href="https://wa.me/34674789724?text=Hola%20!%20Vengo%20de%20la%20página%20oficial%20de%20basslineage,%20quería%20hacer%20una%20consulta!" target="_blank">Contactar por WhatsApp</a>'
                    });
                }
            );
    };

    return (
        <div className="row contact_container m-0" ref={ref}>
            <div className="col-5 col-md-6 contact_form_col">
                <div className="contact_form p-md-5 p-4">
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <input
                                type="text"
                                className="form-control contact_input rounded-pill"
                                name="nombre"
                                value={form.nombre}
                                onChange={handleChange}
                                placeholder="Nombre y Apellido"
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <input
                                type="email"
                                className="form-control contact_input rounded-pill"
                                name="email"
                                value={form.email}
                                onChange={handleChange}
                                placeholder="Email"
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <input
                                type="number"
                                className="form-control contact_input rounded-pill"
                                name="telefono"
                                value={form.telefono}
                                onChange={handleChange}
                                placeholder="Teléfono"
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <textarea
                                className="form-control contact_input contact_message"
                                name="mensaje"
                                value={form.mensaje}
                                onChange={handleChange}
                                rows="3"
                                placeholder="Mensaje"
                                required
                            ></textarea>
                        </div>
                        <div className="col-auto submit_col">
                            <button type="submit" className="btn btn-primary mb-3 rounded-pill submit_contact">
                                Enviar
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            <div className="col-3 contact_info ms-lg-5">
                <h2 className="contact_title">Contáctanos</h2>
                <ul className="contact_list">
                    <li className="contact_item">
                        <div className="circle me-2">
                            <i className="fa-regular fa-envelope icon"></i>
                        </div>
                        <p className="contact_text">basslineageacademia@gmail.com</p>
                    </li>
                    <li className="contact_item">
                    <a href="https://wa.me/34674789724?text=Hola%20!%20Vengo%20de%20la%20página%20oficial%20de%20basslineage,%20quería%20hacer%20una%20consulta!"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="whatsapp_link">
                            <div className="circle me-2">
                                <i className="fa-brands fa-whatsapp icon"></i>
                            </div>
                        </a>
                        <p className="contact_text">+34 674 78 97 24</p>
                    </li>
                    <li className="contact_item">
                    <a href="https://wa.me/34607817148?text=Hola%20!%20Vengo%20de%20la%20página%20oficial%20de%20basslineage,%20quería%20hacer%20una%20consulta!"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="whatsapp_link">
                            <div className="circle me-2">
                                <i className="fa-brands fa-whatsapp icon"></i>
                            </div>
                        </a>
                        <p className="contact_text">+34 607 81 71 48</p>
                    </li>
                    <li className="contact_item">
                        <a href="https://wa.me/393420690210?text=Hola%20!%20Vengo%20de%20la%20página%20oficial%20de%20basslineage,%20quería%20hacer%20una%20consulta!"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="whatsapp_link">
                            <div className="circle me-2">
                                <i className="fa-brands fa-whatsapp icon"></i>
                            </div>
                        </a>
                        <p className="contact_text">+39 342 06 90 210</p>
                    </li>
                    <li className="contact_item">
                        <div className="circle me-2">
                            <i className="fa-solid fa-location-dot icon"></i>
                        </div>
                        <p className="contact_text">Carrer Magalhaes 23</p>
                    </li>
                </ul>
            </div>
        </div>
    );
});

export default ContactForm;
