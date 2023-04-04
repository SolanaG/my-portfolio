import React from "react";
import "./contact.css";
import { IoIosPaperPlane } from "react-icons/io";
import { BsWhatsapp } from "react-icons/bs";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";

const {
  REACT_APP_SERVICE_ID,
  REACT_APP_TEMPLATE_ID,
  REACT_APP_PUBLIC_KEY,
  REACT_APP_PHONE,
} = import.meta.env;

const Contact = () => {
  const form = useRef();

  const notify = () => toast.success("Successfully send!");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      `${REACT_APP_SERVICE_ID}`,
      `${REACT_APP_TEMPLATE_ID}`,
      form.current,
      `${REACT_APP_PUBLIC_KEY}`
    );
    e.target.reset();
    notify();
  };

  const phone = `https://api.whatsapp.com/send?phone=+${REACT_APP_PHONE}`;

  return (
    <section id="contact">
      <h2>Get in touch!</h2>
      <h5>I'll do my best to get back to you soon</h5>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <IoIosPaperPlane className="contact__option-icon" />
            <h4>Email</h4>
            <h5>gomez.solanarocio@gmail.com</h5>
            <a
              href="mailto:gomez.solanarocio@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              Send email
            </a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className="contact__option-icon" />
            <h4>WhatsApp</h4>
            <h5>Say hello</h5>
            <a href={phone} target="_blank" rel="noreferrer">
              Send a message
            </a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Messagge"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            SEND
          </button>
          <Toaster />
        </form>
      </div>
    </section>
  );
};

export default Contact;
