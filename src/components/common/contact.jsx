import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Send } from "lucide-react";
import { motion } from "framer-motion";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    emailjs.send(
      "service_vq7u1sf",
      "template_k2me289",
      {
        to_name: "Kahan",
        from_name: formData.name,
        user_email: formData.email,
        message: formData.message
      },
      "7a5egcSEvUjXlEMNT"
    )
    .then(() => {
      toast.success("Message sent successfully!", {
        position: "bottom-right",
        theme: "dark",
      });
      setFormData({ name: "", email: "", message: "" });
    })
    .catch((error) => {
      toast.error("Failed to send message!", {
        position: "bottom-right",
        theme: "dark",
      });
      console.error("Error sending email:", error);
    })
    .finally(() => {
      setIsSubmitting(false);
    });
  };

  return (
    <div className="w-full py-24 px-4 bg-[#0a0a0a] flex justify-center items-center">
      <div className="max-w-3xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-sm font-semibold tracking-wider text-emerald-500 uppercase mb-4">Get in Touch</h2>
          <h1 className="text-3xl md:text-5xl font-medium text-gray-100">Let's Work Together</h1>
          <p className="text-gray-400 mt-4 max-w-xl mx-auto">
            Have a project in mind or want to collaborate? Feel free to drop a message. I'll get back to you as soon as possible!
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <form onSubmit={handleSubmit} className="space-y-6 bg-[#111111] p-8 rounded-2xl border border-gray-800 shadow-xl shadow-black/50">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2 text-left">
                <label className="text-sm font-medium text-gray-300">Your Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-4 bg-[#1a1a1a] border border-gray-800 rounded-xl text-gray-100 placeholder-gray-600 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all font-sans"
                  required
                />
              </div>
              <div className="space-y-2 text-left">
                <label className="text-sm font-medium text-gray-300">Your Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-4 bg-[#1a1a1a] border border-gray-800 rounded-xl text-gray-100 placeholder-gray-600 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all font-sans"
                  required
                />
              </div>
            </div>
            
            <div className="space-y-2 text-left">
              <label className="text-sm font-medium text-gray-300">Message</label>
              <textarea
                name="message"
                placeholder="Tell me about your project..."
                value={formData.message}
                onChange={handleChange}
                className="w-full p-4 bg-[#1a1a1a] border border-gray-800 rounded-xl h-40 text-gray-100 placeholder-gray-600 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all resize-none font-sans"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-4 bg-emerald-500 hover:bg-emerald-400 text-black font-bold rounded-xl transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed mt-4"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
              <Send className="w-5 h-5" />
            </button>
          </form>
        </motion.div>
      </div>
      <ToastContainer />
    </div>
  );
}
