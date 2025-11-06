import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const PreviewSection = ({
  formData,
  setFormData,
  onGenerate,
  generatedHTML,
  setGeneratedHTML,
  navigate,
  generatedURL,
  setGeneratedURL = { setGeneratedURL },
}) => {
  return (
    <div className="bg-white p-8 rounded-2xl shadow-lg w-full md:w-1/2 border border-gray-200 relative overflow-hidden">
      {/* Top-right preview button */}
      <button
        onClick={() => generatedURL && window.open(generatedURL, "_blank")}
        disabled={!generatedURL}
        className={`absolute top-4 right-4 flex items-center gap-1 text-sm px-3 py-1.5 rounded-full shadow-md transition-all ${
          generatedURL
            ? "bg-gradient-to-r from-blue-600 to-cyan-400 text-white hover:opacity-90"
            : "bg-gray-300 text-gray-500 cursor-not-allowed"
        }`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          className="w-4 h-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M4 6h8m0 0v12m0-12l8 4v4l-8 4"
          />
        </svg>
        Preview
      </button>

      {/* Profile Image Preview */}
      {formData.profileImage && (
        <div className="flex justify-center mb-4">
          <img
            src={formData.profileImage}
            alt="Profile"
            className="w-32 h-32 object-cover rounded-full border-4 border-blue-500 shadow-lg"
          />
        </div>
      )}

      <h1 className="text-3xl font-bold text-gray-900 mb-2 border-b pb-3 text-center animate-pulse">
        {formData.name || "Your Name"}
      </h1>
      <h2 className="text-xl text-blue-600 mb-4 text-center font-medium">
        {formData.title || "Your Title"}
      </h2>

      <p className="mb-5 text-gray-700 leading-relaxed text-center whitespace-pre-line">
        {formData.bio || "Short bio..."}
      </p>

      <div className="mt-6 space-y-4">
        <div>
          <h3 className="font-semibold text-gray-800 text-lg">Skills</h3>
          <p className="text-gray-600 whitespace-pre-line text-base">
            {formData.skills || "Your skills..."}
          </p>
        </div>

        <div>
          <h3 className="font-semibold text-gray-800 text-lg">Projects</h3>
          <p className="text-gray-600 whitespace-pre-line text-base">
            {formData.projects || "Describe your projects..."}
          </p>
        </div>

        <div>
          <h3 className="font-semibold text-gray-800 text-lg">Contact</h3>
          <p className="text-gray-600 whitespace-pre-line text-base">
            {formData.contact || "Your contact details..."}
          </p>
        </div>
      </div>

      <div className="mt-6 flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
        <button
          onClick={onGenerate}
          className="px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 to-cyan-400 text-white font-semibold shadow-md hover:scale-105 active:scale-95 transition-transform"
        >
          🚀 Generate Website
        </button>
        {generatedHTML && (
          <button
            onClick={() => {
              //  Fancy toast for starting download
              toast.loading(
                " Downloading your website... please wait a moment.",
                {
                  position: "top-center",
                  theme: "colored",
                  style: {
                    background: "linear-gradient(to right, #1E3A8A, #3B82F6)",
                    color: "white",
                    fontWeight: "bold",
                    borderRadius: "10px",
                    padding: "10px 16px",
                    boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
                  },
                }
              );

              //  Delay to simulate "building"
              setTimeout(() => {
                const blob = new Blob([generatedHTML], {
                  type: "text/html;charset=utf-8",
                });
                const url = URL.createObjectURL(blob);
                const a = document.createElement("a");
                a.href = url;
                a.download =
                  (formData.name.trim().toLowerCase().replace(/\s+/g, "-") ||
                    "portfolio") + ".html";
                a.click();
                URL.revokeObjectURL(url);

                //  Reset form
                setFormData({
                  name: "",
                  title: "",
                  bio: "",
                  skills: "",
                  projects: "",
                  contact: "",
                });
                setGeneratedHTML("");
                setGeneratedURL("");
                navigate("/");

                toast.dismiss();
                toast.success(
                  "✨ Your website has been generated and downloaded successfully!",
                  {
                    position: "top-center",
                    autoClose: 3000,
                    theme: "colored",
                    style: {
                      background: "linear-gradient(to right, #16A34A, #22C55E)",
                      color: "white",
                      fontWeight: "bold",
                      borderRadius: "10px",
                      padding: "10px 16px",
                      boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
                    },
                  }
                );
              }, 3000); // 3s delay for realism
            }}
            className="px-6 py-2 rounded-full bg-gradient-to-r from-green-500 to-emerald-400 text-white font-semibold shadow-md hover:opacity-95 transition-transform duration-200 hover:scale-105"
          >
            Download Website
          </button>
        )}
      </div>
    </div>
  );
};

export default PreviewSection;
