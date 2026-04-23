import React, { useState } from "react";
import {
  BsEnvelopeFill,
  BsTelephoneFill,
  BsGeoAltFill,
  BsChevronRight,
  BsGithub,
  BsBehance,
  BsDribbble,
} from "react-icons/bs";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState({ loading: false });
  const [modal, setModal] = useState({ open: false, type: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true });
    try {
      const res = await fetch("https://formspree.io/f/mojykgwv", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setFormData({ name: "", email: "", message: "" });
        setModal({ open: true, type: "success", message: "Message sent successfully!" });
      } else { throw new Error(); }
    } catch {
      setModal({ open: true, type: "error", message: "Something went wrong." });
    } finally { setStatus({ loading: false }); }
  };

  return (
    <section id="contact" className="py-10 text-white">
      <div className="max-w-6xl mx-auto">
        
        {/* Main Contact Card */}
        <div className="bg-[#1a1a3a]/50 border border-white/10 rounded-3xl p-8 md:p-12 backdrop-blur-sm">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
            
            {/* Left: Contact Details */}
            <div className="space-y-8 py-4">
              <div className="flex items-center gap-6">
                <BsEnvelopeFill className="text-purple-400 text-xl shrink-0" />
                <p className="text-gray-300 font-medium border-l-2 border-white/20 pl-6">smith.ranjan07@gmail.com</p>
              </div>
              <div className="flex items-center gap-6">
                <BsTelephoneFill className="text-purple-400 text-xl shrink-0" />
                <p className="text-gray-300 font-medium border-l-2 border-white/20 pl-6">+91 9709599398</p>
              </div>
              <div className="flex items-center gap-6">
                <BsGeoAltFill className="text-purple-400 text-xl shrink-0" />
                <p className="text-gray-300 font-medium border-l-2 border-white/20 pl-6">New Delhi, India</p>
              </div>
            </div>

            {/* Middle: Title & Socials */}
            <div className="text-center flex flex-col items-center justify-center space-y-6">
              <div>
                <h2 className="text-4xl font-bold mb-2">Contact Me</h2>
                <p className="text-gray-400 uppercase tracking-widest text-sm">Get In Touch</p>
                <div className="w-16 h-1 bg-white/20 mx-auto mt-4 rounded-full"></div>
              </div>

              <div className="pt-4">
                <p className="text-sm text-gray-400 mb-4 font-semibold uppercase tracking-wider">Find Me On</p>
                <div className="flex gap-4">
                  <a href="#" className="p-3 bg-[#0f0c29] rounded-xl hover:bg-purple-600 transition-all border border-white/10"><BsGithub size={20} /></a>
                  <a href="#" className="p-3 bg-[#0f0c29] rounded-xl hover:bg-purple-600 transition-all border border-white/10"><BsBehance size={20} /></a>
                  <a href="#" className="p-3 bg-[#0f0c29] rounded-xl hover:bg-purple-600 transition-all border border-white/10"><BsDribbble size={20} /></a>
                </div>
              </div>
            </div>

            {/* Right: Form */}
            <div>
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  name="name" type="text" placeholder="Your Name" required
                  value={formData.name} onChange={handleChange}
                  className="w-full bg-[#0f0c29] border border-white/10 rounded-xl py-3 px-5 text-white focus:outline-none focus:border-purple-500 transition-all"
                />
                <input
                  name="email" type="email" placeholder="Your Email" required
                  value={formData.email} onChange={handleChange}
                  className="w-full bg-[#0f0c29] border border-white/10 rounded-xl py-3 px-5 text-white focus:outline-none focus:border-purple-500 transition-all"
                />
                <textarea
                  name="message" rows="4" placeholder="Your Message" required
                  value={formData.message} onChange={handleChange}
                  className="w-full bg-[#0f0c29] border border-white/10 rounded-xl py-3 px-5 text-white focus:outline-none focus:border-purple-500 transition-all resize-none"
                />
                <div className="flex justify-end">
                  <button
                    type="submit" disabled={status.loading}
                    className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white px-8 py-3 rounded-xl transition-all flex items-center gap-2 font-bold shadow-lg shadow-purple-500/20"
                  >
                    {status.loading ? "Sending..." : "Send Message"}
                    <BsChevronRight />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Success/Error Modal */}
      {modal.open && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/80 z-50 p-4 backdrop-blur-sm">
          <div className="bg-[#1a1a3a] border border-white/10 rounded-2xl p-8 max-w-sm w-full text-center shadow-2xl">
            <h3 className={`text-2xl font-bold mb-2 ${modal.type === "success" ? "text-green-400" : "text-red-400"}`}>
              {modal.type === "success" ? "Success!" : "Oops!"}
            </h3>
            <p className="text-gray-300 mb-6">{modal.message}</p>
            <button
              onClick={() => setModal({ ...modal, open: false })}
              className="w-full bg-purple-600 py-3 rounded-xl font-bold hover:bg-purple-500 transition-all"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Contact;