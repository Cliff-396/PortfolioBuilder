import React from "react";
import { motion } from "framer-motion";
import { Code, Cpu, Sparkles, Phone } from "lucide-react";

const About = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-purple-100 flex flex-col items-center justify-center px-6 py-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl text-center"
      >
        <h1 className="text-4xl md:text-5xl font-extrabold text-blue-800 mb-4 drop-shadow-sm">
          About <span className="text-purple-600">NeuroBuild Innovations</span>
        </h1>
        <p className="text-lg text-gray-700 mb-12 leading-relaxed">
          At <strong>Notion BTD</strong>, we help individuals and
          businesses transform their ideas into modern, AI-powered web and
          mobile experiences. Our mission is simple — build smart, elegant, and
          high-performing digital solutions that make your work faster and more
          efficient.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {/* CARD 1 */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white shadow-xl rounded-2xl p-6 border-t-4 border-blue-600 hover:shadow-2xl transition-all duration-300"
          >
            <div className="flex justify-center mb-4">
              <Code className="text-blue-600 w-10 h-10" />
            </div>
            <h3 className="text-xl font-semibold text-blue-700 mb-2">
              Web & App Development
            </h3>
            <p className="text-gray-600">
              We design and build responsive, fast, and interactive websites
              that make your brand stand out online.
            </p>
          </motion.div>

          {/* CARD 2 */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white shadow-xl rounded-2xl p-6 border-t-4 border-purple-600 hover:shadow-2xl transition-all duration-300"
          >
            <div className="flex justify-center mb-4">
              <Cpu className="text-purple-600 w-10 h-10" />
            </div>
            <h3 className="text-xl font-semibold text-purple-700 mb-2">
              AI Integration
            </h3>
            <p className="text-gray-600">
              From chatbots to smart analytics, we integrate AI tools into your
              business to boost productivity and decision-making.
            </p>
          </motion.div>

          {/* CARD 3 */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white shadow-xl rounded-2xl p-6 border-t-4 border-pink-600 hover:shadow-2xl transition-all duration-300"
          >
            <div className="flex justify-center mb-4">
              <Sparkles className="text-pink-600 w-10 h-10" />
            </div>
            <h3 className="text-xl font-semibold text-pink-700 mb-2">
              Custom Solutions
            </h3>
            <p className="text-gray-600">
              We build tailored solutions that fit your needs — from portfolios
              to business management systems.
            </p>
          </motion.div>
        </div>

        {/* Contact Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="mt-16 bg-white shadow-lg rounded-2xl p-6 border-t-4 border-blue-500 max-w-md mx-auto hover:shadow-2xl transition-all"
        >
          <div className="flex items-center justify-center mb-3">
            <Phone className="w-6 h-6 text-blue-600 mr-2" />
            <h3 className="text-xl font-semibold text-blue-700">Contact Us</h3>
          </div>
          <p className="text-gray-700 mb-1">
            📞 <strong>0593554420</strong>
          </p>
          <p className="text-gray-700 mb-3">
            📞 <strong>0256327711</strong>
          </p>
          <p className="text-gray-600 italic">
            Have a project in mind? Let’s build something great together!
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
          className="mt-10"
        >
          <p className="text-gray-700 text-lg">
            Built with ❤️ by Cliff and Terry from{" "}
            <span className="font-semibold text-purple-700">
              NeuroBuild Innovations
            </span>
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;
