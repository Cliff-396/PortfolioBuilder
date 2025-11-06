import React, { useState } from "react";
import FormSection from "./components/FormSection";
import PreviewSection from "./components/PreviewSection";
import confetti from "canvas-confetti";
import buildPortfolioHTML from "./components/buildPortfolioHTML";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Footer from "./components/Footer";

const App = () => {
  const [formData, setFormData] = useState({
    name: "",
    title: "",
    bio: "",
    skills: "",
    projects: "",
    contact: "",
    profileImage: "",
  });

  const [generatedHTML, setGeneratedHTML] = useState(null);
  const [generatedURL, setGeneratedURL] = useState(null);

  const navigate = useNavigate();

  const handleGenerate = () => {
    // Validation check — all fields required
    const emptyFields = Object.entries(formData).filter(([_, v]) => !v.trim());
    if (emptyFields.length > 0) {
      toast.error(
        "🚫 Oops! Please fill in all required fields before generating.",
        {
          position: "top-center",
          autoClose: 3500,
          theme: "colored",
          style: {
            background: "linear-gradient(135deg, #b91c1c, #ef4444)",
            color: "white",
            fontWeight: "bold",
            fontSize: "15px",
            borderRadius: "10px",
            padding: "14px 18px",
            textAlign: "center",
            boxShadow: "0 6px 14px rgba(239,68,68,0.4)",
          },
          icon: "❗",
        }
      );
      return;
    }

    // Show a fancy loading toast
    const loadingId = toast.loading("⚙️ Building your portfolio magic...", {
      position: "top-center",
      theme: "colored",
      style: {
        background: "linear-gradient(135deg, #1e3a8a, #3b82f6)",
        color: "white",
        fontWeight: "bold",
        fontSize: "15px",
        borderRadius: "10px",
        padding: "14px 18px",
        textAlign: "center",
        boxShadow: "0 6px 14px rgba(59,130,246,0.4)",
      },
    });

    //  delay 2.5-second before generating portfolio
    setTimeout(() => {
      console.log("Form data before generating:", formData);

      const html = buildPortfolioHTML(formData);
      setGeneratedHTML(html);

      // Confetti
      const duration = 2 * 1000;
      const end = Date.now() + duration;
      (function frame() {
        confetti({ particleCount: 3, angle: 60, spread: 55, origin: { x: 0 } });
        confetti({
          particleCount: 3,
          angle: 120,
          spread: 55,
          origin: { x: 1 },
        });
        if (Date.now() < end) requestAnimationFrame(frame);
      })();

      toast.dismiss(loadingId);
      toast.success("🎉 Portfolio Generated Successfully!", {
        position: "top-center",
        autoClose: 2500,
        theme: "colored",
        style: {
          background: "linear-gradient(135deg, #16a34a, #22c55e)",
          color: "white",
          fontWeight: "bold",
          fontSize: "15px",
          borderRadius: "10px",
          padding: "14px 18px",
          textAlign: "center",
          boxShadow: "0 6px 14px rgba(34,197,94,0.4)",
        },
        icon: "🚀",
      });

      //  Generate downloadable HTML
      const blob = new Blob([html], { type: "text/html" });
      const generatedURL = URL.createObjectURL(blob);
      setGeneratedURL(generatedURL);
    }, 2500);
  };

  return (
    <>
      <Navbar />

      <Routes>
        {/*  Home route with form + preview */}
        <Route
          path="/"
          element={
            <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-200 p-10 flex flex-col md:flex-row gap-10 items-start justify-center">
              <FormSection formData={formData} setFormData={setFormData} />
              <PreviewSection
                formData={formData}
                setFormData={setFormData}
                onGenerate={handleGenerate}
                generatedHTML={generatedHTML}
                setGeneratedHTML={setGeneratedHTML}
                navigate={navigate}
                generatedURL={generatedURL}
                setGeneratedURL={setGeneratedURL}
              />
              <ToastContainer />
            </div>
          }
        />

        {/* About page */}
        <Route path="/about" element={<About />} />
      </Routes>
      <div className="h-24"></div>
      <Footer />
    </>
  );
};

export default App;
