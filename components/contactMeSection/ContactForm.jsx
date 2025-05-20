import { useState } from "react";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const form = useRef();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState("");
  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleMessage = (e) => {
    setMessage(e.target.value);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_unhtcvr", "template_td8ji6p", form.current, {
        publicKey: "VX3ybGVCBYSAGtrj9",
      })
      .then(
        () => {
          setName("");
          setEmail("");
          setMessage("");
          setSuccess("Message Sent!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div>
      <p className="text-cyan">{success}</p>
      <form
        className="flex flex-col gap-4 text-white"
        ref={form}
        onSubmit={sendEmail}
      >
        <input
          name="from_name"
          className="h-12 rounded-lg bg-light-brown px-2"
          type="text"
          placeholder="Your Name"
          required
          onChange={handleName}
          value={name}
        />
        <input
          name="from_email"
          type="email"
          placeholder="Your Email"
          required
          className="h-12 rounded-lg bg-light-brown px-2"
          value={email}
          onChange={handleEmail}
        />
        <textarea
          name="message"
          className=" rounded-lg bg-light-brown p-2"
          type="text"
          required
          placeholder="Message"
          rows="9"
          cols="50"
          id=""
          value={message}
          onChange={handleMessage}
        />
        <button className="w-full rounded-lg border border-cyan text-white h-12 font-bold text-xl hover:bg-darkCyan bg-cyan transition-all duration-500">
          Send
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
