import React from "react";
import { motion } from "framer-motion";
import "./index.css";

const whatsappLink = "https://chat.whatsapp.com/EFKEFtr0VLq1kNUqTFrSyJ";

// Reusable CTA Button
const CTAButton = ({ text }) => {
  const handleClick = () => {
    window.location.href = whatsappLink;
  };

  return (
    <motion.button
      onClick={handleClick}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      className="px-8 py-4 text-lg font-bold text-white bg-orange-500 rounded-xl shadow-lg hover:bg-orange-600"
    >
      {text}
    </motion.button>
  );
};

export default function App() {
  return (
    <div className="bg-gray-100 text-gray-900">
      {/* HERO SECTION */}
      <section className="min-h-screen flex flex-col justify-center items-center text-center p-6 bg-gray-900 text-white">
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-extrabold mb-4"
        >
          Learn Coding From Scratch — Even With Just Your Phone
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-lg md:text-xl text-gray-200 mb-6 max-w-xl"
        >
          Start your coding journey using your smartphone, learn the basics
          step-by-step, and transition to full frontend development when you're
          ready.
        </motion.p>

        <ul className="text-left mb-6 space-y-2 text-gray-300">
          <li>✅ Start with your phone — upgrade to a laptop as you grow</li>
          <li>✅ Perfect for complete beginners</li>
          <li>✅ Build real projects step-by-step</li>
          <li>✅ Join a supportive learning community</li>
        </ul>

        <CTAButton text="👉 Join Free Training Now" />

        <p className="text-red-500 font-semibold mt-4">
          ⚠️ Limited slots available — Don’t miss out!
        </p>
      </section>

      {/* TRUST / AUTHORITY SECTION */}
      <section className="py-12 px-6 bg-white text-center">
        <h2 className="text-3xl font-bold mb-4">Why This Training Works</h2>

        <p className="max-w-xl mx-auto text-gray-600 mb-6">
          Unlike most confusing tutorials, I teach coding in a simple way that
          beginners understand — even if you're starting for the first time.
        </p>

        <p className="text-3xl font-bold">25,000+ Students Trained</p>
      </section>

      {/* WHAT YOU WILL LEARN */}
      <section className="py-12 px-6 bg-gray-50 text-center">
        <h2 className="text-3xl font-bold mb-6">
          What You’ll Learn in This Free Training
        </h2>

        <div className="max-w-xl mx-auto text-left space-y-3">
          <p>✔️ How to start coding from scratch</p>
          <p>✔️ How to use your phone to write code</p>
          <p>✔️ How websites actually work</p>
          <p>✔️ How to build your first project</p>
          <p>✔️ How to continue learning and grow in tech</p>
        </div>

        <div className="mt-6">
          <CTAButton text="🚀 Secure Your Free Spot Now" />
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-12 px-6 bg-white text-center">
        <h2 className="text-3xl font-bold mb-6">What My Students Are Saying</h2>

        {/* Replace these images with your real screenshots */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <img src="/review1.jpeg" alt="review" className="rounded-lg shadow" />
          <img src="/review3.jpeg" alt="review" className="rounded-lg shadow" />
          <img src="/review2.jpeg" alt="review" className="rounded-lg shadow" />
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-16 text-center bg-gray-50 px-6">
        <h2 className="text-3xl font-extrabold mb-4">
          Don’t Stay Confused About Tech
        </h2>

        <p className="text-gray-600 mb-6 max-w-xl mx-auto">
          If you’ve been trying to learn coding and feel lost, this training
          will give you the clarity and direction you need to finally start.
        </p>

        <CTAButton text="👉 Join the WhatsApp Training Now" />

        <p className="text-red-500 font-semibold mt-4">
          Limited slots. Once it fills up, access will be closed.
        </p>
      </section>

      {/* FOOTER */}
      <footer className="text-center py-6 text-gray-500 text-sm">
        © {new Date().getFullYear()} The Queen of Web | All Rights Reserved
      </footer>
    </div>
  );
}
