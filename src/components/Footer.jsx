import { FaGithub, FaLinkedin, FaWhatsapp, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="fixed bottom-0 left-0 w-full bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-gray-300 text-center py-5 shadow-inner border-t border-gray-700 z-50">
      <p className="text-sm md:text-base">
        © {currentYear}{" "}
        <span className="text-blue-400 font-semibold">Notion BTD</span> — All
        rights reserved.
      </p>

      <p className="text-xs mt-1 text-gray-400">Designed by NeuroBuild</p>

      {/*  Social Icons */}
      <div className="flex justify-center mt-3 gap-5 text-lg">
        <a
          href="https://github.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-400 transition-colors duration-300"
        >
          <FaGithub />
        </a>
        <a
          href="https://linkedin.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-400 transition-colors duration-300"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://wa.me/233256327711"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-green-400 transition-colors duration-300"
        >
          <FaWhatsapp />
        </a>
        <a
          href="mailto:contact@notionbtd.dev"
          className="hover:text-red-400 transition-colors duration-300"
        >
          <FaEnvelope />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
