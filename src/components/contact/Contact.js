import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import "./Contact.css"

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_4hesm8q', 'template_ox4abgi', form.current, 'xM02NiJqW-zPmp2QZ')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });

        e.targetr.reset();
    };
    return (
        <section className="contact section" id="contact">
            <h2 className="section__title">Contact</h2>
            <span className="section__subtitle">Get In Touch</span>

            <div className="contact__container container grid">
                <div className="contact__content">


                    <div className="contact__info">
                        <h3 className="contact__title">Talk to me</h3>
                        <div className="contact__card">
                            <i className='bx bx-envelope contact__card-icon'></i>
                            <h3 className="contact__card-title">Email</h3>
                            <span className="contact__card-data">vinitrrane@gmail.com</span>
                            <a href="mailto:vinitrrane@gmail.com" className="contact__button" target="_blank" rel="noreferrer">Write Me {""} <i className='bx bx-right-arrow-alt contact__button-icon'></i></a>
                        </div>
                        <div className="contact__card">
                            <i className='bx bxl-whatsapp contact__card-icon' ></i>
                            <h3 className="contact__card-title">Whatsapp</h3>
                            <span className="contact__card-data">7977133771</span>
                            <a href="https://api.whatsapp.com/send?phone=7977133771&text=Hello, more information!" className="contact__button" target="_blank" rel="noreferrer">Ping Me {""} <i className='bx bx-right-arrow-alt contact__button-icon'></i></a>
                        </div>

                        <div className="contact__card">
                            <i className='bx bx-phone-call contact__card-icon' ></i>
                            <h3 className="contact__card-title">Call</h3>
                            <span className="contact__card-data">7977133771</span>
                            <a href="tel:+917977133771" className="contact__button" target="_blank" rel="noreferrer">Contact Me {""} <i className='bx bx-right-arrow-alt contact__button-icon'></i></a>
                        </div>

                    </div>

                </div>
                <div className="contact__info">
                    <h3 className="contact__title">Write me your project</h3>
                    <form ref={form} onSubmit={sendEmail} className="contact__form">
                        <div className="contact__form-div">
                            <label className="contact__form-tag">Name</label>
                            <input type="name" name="name" className="contact__form-input" placeholder="Insert your name" required />
                        </div>
                        <div className="contact__form-div">
                            <label className="contact__form-tag">Mail</label>
                            <input type="email" name="email" className="contact__form-input" placeholder="Insert your email" required />
                        </div>
                        <div className="contact__form-div contact__form-area">
                            <label className="contact__form-tag">Project</label>
                            <textarea name="project" className="contact__form-input " cols="30" rows="10" placeholder="Write your project" required></textarea>
                        </div>
                        <button className="button button--flex">
                            Send Message
                        </button>
                    </form>
                </div>

            </div >
        </section >
    )
};

export default Contact;
