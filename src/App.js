import { useState } from "react";
import FormSection from "./components/FormSection";
import PreviewSection from "./components/PreviewSection";
import confetti from "canvas-confetti";
import buildPortfolioHTML from "./components/buildPortfolioHTML";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();

  const handleGenerate = () => {
    // 🧩 Validation check — all fields required
    const emptyFields = Object.entries(formData).filter(([_, v]) => !v.trim());
    if (emptyFields.length > 0) {
      toast.error("⚠️ Please fill in all required fields before generating.", {
        position: "top-center",
        autoClose: 3000,
        theme: "colored",
      });
      return;
    }
    console.log("Form data before generating:", formData);

    const html = buildPortfolioHTML(formData);
    setGeneratedHTML(html);

    // 🎉 Confetti effect on generate
    // 🎊 Realistic confetti burst
    const duration = 2 * 1000; // 2 seconds
    const end = Date.now() + duration;

    (function frame() {
      // left side
      confetti({
        particleCount: 3,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
      });
      // right side
      confetti({
        particleCount: 3,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    })();

    toast.success("🎉 Website Generated Successfully!", {
      position: "top-center",
      autoClose: 2000,
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-200 p-10 flex flex-col md:flex-row gap-10 items-start justify-center">
      <FormSection formData={formData} setFormData={setFormData} />
      <PreviewSection
        formData={formData}
        setFormData={setFormData}
        onGenerate={handleGenerate}
        generatedHTML={generatedHTML}
        setGeneratedHTML={setGeneratedHTML}
        navigate={navigate}
      />
      <ToastContainer />
    </div>
  );
};

export default App;
