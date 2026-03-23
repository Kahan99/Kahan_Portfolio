import React, { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
import { twMerge } from "tailwind-merge";
import { RevealLinks } from "../components/common/RevealLinks";
import shakehand from '../assets/images/shakehands.svg';
import { ReactLenis } from 'lenis/react';
import SEO from "../components/SEO";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const ContactPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.send(
      "service_vq7u1sf",   // ✅ Your Service ID
      "template_k2me289",  // ✅ Your Template ID
      {
        to_name: "Kahan",
        from_name: formData.name,
        user_email: formData.email,
        message: formData.message
      },
      "7a5egcSEvUjXlEMNT"  // ✅ Your Public Key
    )
    
    .then(() => {
      toast.success("Message sent successfully!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        theme: "dark",
      });

      setFormData({ name: "", email: "", message: "" }); // Reset form
    })
    .catch((error) => {
      toast.error("Failed to send message!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        theme: "dark",
      });
      console.error("Error sending email:", error);
    });
  };

  return (
    <>
      <SEO
        title="Contact"
        description="Welcome to my portfolio website. I'm a Full Stack Developer specializing in modern web technologies."
        path="/contact"
      />
      <ReactLenis root>
        {/* First Section - Contact Heading */}
        <section className={twMerge(
          "sticky top-0 grid min-h-screen w-full place-content-center overflow-hidden bg-[#f5f5f5]",
          "lenis-section"
        )}>
          <h2 className="relative z-0 text-[14vw] font-black text-[#333] md:text-[200px]">
            Contact<span className="text-[#ff6b6b]">.</span>
          </h2>
        </section>

        {/* Second Section - Contact Form */}
        <section className={twMerge(
          "sticky top-0 min-h-screen w-full flex items-center justify-center bg-[#e8e2e2] rounded-t-3xl",
          "lenis-section"
        )}>
          <div className="w-full max-w-lg bg-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-lg border border-white/20">
            <div className="flex justify-center">
              <div className="w-24 h-24 rounded-full bg-gray-200 flex items-center justify-center shadow-lg">
                <img src={shakehand} alt="Hand shake" className="w-16" />
              </div>
            </div>
            {/* Contact Form */}
            <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mt-6">
              Get in Touch
            </h2>
            <p className="text-gray-600 dark:text-gray-300 text-center mt-2">
              Feel free to drop a message. I'll get back to you soon!
            </p>
            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-4 bg-gray-100 border border-gray-300 rounded-xl text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-4 bg-gray-100 border border-gray-300 rounded-xl text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                className="w-full p-4 bg-gray-100 border border-gray-300 rounded-xl h-36 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              ></textarea>
              <button
                type="submit"
                className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl transition-all duration-300 transform hover:scale-105 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              >
                Send Message
              </button>
            </form>
          </div>
        </section>

        {/* Third Section - Reveal Links */}
        <section className={twMerge(
          "sticky top-0 place-content-center overflow-hidden",
          "lenis-section"
        )}>
          <RevealLinks />
        </section>
      </ReactLenis>

      {/* Toast Notifications */}
      <ToastContainer />
    </>
  );
};
