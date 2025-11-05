const PreviewSection = ({
  formData,
  setFormData,
  onGenerate,
  generatedHTML,
  setGeneratedHTML,
  navigate,
}) => {
  return (
    <div className="bg-white p-8 rounded-2xl shadow-lg w-full md:w-1/2 border border-gray-200 relative overflow-hidden hover:shadow-2xl transition-all duration-300">
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

              // 👇🏽 Add this
              setFormData({
                name: "",
                title: "",
                bio: "",
                skills: "",
                projects: "",
                contact: "",
              });
              setGeneratedHTML("");
              navigate("/");
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
