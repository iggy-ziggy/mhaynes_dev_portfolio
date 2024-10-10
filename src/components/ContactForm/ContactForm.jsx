import React, { useState } from "react";
import emailjs from "emailjs-com";
import Swal from "sweetalert2";
import "./ContactForm.css";
import Button from "../Button/Button";

const SERVICE_ID = import.meta.env.VITE_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_PUBLIC_KEY;

export default function ContactForm() {
  const [formData, setFormData] = useState({
    from_name: "",
    reply_to: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    // console.log(formData)
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLIC_KEY).then(
      (result) => {
        console.log(result.text);
        Swal.fire({
          icon: "success",
          title: "Message sent successfully",
        });
      },
      (error) => {
        console.log(error.text);
        Swal.fire({
          icon: "error",
          title: "Oops! Something went wrong",
          text: error.text,
        });
      }
    );
    e.target.reset();
  };
  return (
    <div className="form_container">
      <form className="contact_form" onSubmit={handleSubmit}>
        <h3 className="form_header">Contact</h3>
        <div className="input name_input">
          <label>Name</label>
          <input
          id="from_name"
            type="text"
            name="from_name"
            value={formData.from_name}
            onChange={handleChange}
            onFocus={(event) => {
              event.target.setAttribute("autocomplete", "off");
            }}
            // style={{color: 'var(--pink)', fontWeight: 'bold'}}
          />
        </div>
        <div className="input email_input">
          <label>Email</label>
          <input
          id="reply_to"
            type="email"
            name="reply_to"
            value={formData.reply_to}
            onChange={handleChange}
            onFocus={(event) => {
              event.target.setAttribute("autocomplete", "off");
            }}
            // style={{color: 'var(--pink)', fontWeight: 'bold'}}
          />
        </div>
        <div className="input message_input">
          <label>Message</label>
          <textarea
          id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            style={{width: '100%'}}
          />
        </div>
        <Button type="submit" text="Submit" />
      </form>
    </div>
  );
}
