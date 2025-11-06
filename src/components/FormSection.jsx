import React from "react";

const FormSection = ({ formData, setFormData }) => {
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onloadend = () => {
      // reader.result is a base64 data URL (data:image/...)
      setFormData({ ...formData, profileImage: reader.result });
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="bg-white p-8 rounded-2xl shadow-lg w-full md:w-1/2 border border-gray-200 hover:shadow-2xl transition-all duration-300">
      <h2 className="text-2xl font-bold mb-6 text-gray-800 border-b pb-3 text-center">
        ✏️ Your Info
      </h2>

      {/* Profile Image Upload (your block) */}
      <div className="mb-6 text-center">
        <label className="block text-gray-700 font-semibold mb-2">
          Profile Image
        </label>

        {/* Show preview after upload */}
        {formData.profileImage && (
          <div className="flex justify-center mb-3">
            <img
              src={formData.profileImage}
              alt="Profile Preview"
              className="w-24 h-24 object-cover rounded-full border-2 border-blue-400 shadow-md"
            />
          </div>
        )}

        {/* Custom upload button */}
        <label className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-5 py-2.5 rounded-full cursor-pointer hover:from-cyan-500 hover:to-blue-600 transition-all transform hover:scale-105 shadow-md active:scale-95">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.6"
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 8l2-2h3l1-2h6l1 2h3l2 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V8z"
            />
            <circle cx="12" cy="13" r="3" />
          </svg>
          Choose Image
          <input
            type="file"
            name="profileImage"
            accept="image/*"
            onChange={handleImageUpload}
            className="hidden"
          />
        </label>
      </div>

      {/* Other fields: exclude profileImage from the auto-generated list */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {Object.keys(formData)
          .filter((key) => key !== "profileImage") // <- IMPORTANT: skip profileImage
          .map((key) => (
            <div key={key} className="flex flex-col">
              <label className="capitalize font-semibold text-gray-700 mb-2 text-sm tracking-wide">
                {key}
              </label>
              <textarea
                name={key}
                value={formData[key]}
                onChange={handleChange}
                rows="2"
                className="border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none resize-none text-gray-800 text-base"
              />
            </div>
          ))}

        {/* Theme Selector */}
        {/*<div className="flex flex-col sm:col-span-2">
          <label className="capitalize font-semibold text-gray-700 mb-2 text-sm tracking-wide">
            Theme
          </label>
          <select
            name="theme"
            value={formData.theme}
            onChange={handleChange}
            className="border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none text-gray-800 text-base"
          >
            <option value="dark">Dark</option>
            <option value="light">Light</option>
            <option value="blue">Ocean Blue</option>
            <option value="purple">Elegant Purple</option>
          </select>
        </div>
        */}
      </div>
    </div>
  );
};

export default FormSection;
