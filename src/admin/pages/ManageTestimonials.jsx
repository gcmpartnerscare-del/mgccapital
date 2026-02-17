import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { Send, ImagePlus } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Notification from "../ui/Notification";

const ManageTestimonials = () => {
  const [formData, setFormData] = useState({
    imageUrl: "",
    mainTitle: "",
    quote: "",
    name: "",
    nationality: "",
    origin: "",
  });

  const [toast, setToast] = useState({
    show: false,
    message: "",
    type: "success",
  });

  const [editMode, setEditMode] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [uploading, setUploading] = useState(false);
  const navigate = useNavigate();
  const dropRef = useRef(null);

  useEffect(() => {
    const testimonialToEdit = localStorage.getItem("editTestimonial");
    if (testimonialToEdit) {
      setFormData(JSON.parse(testimonialToEdit));
      setEditMode(true);
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileUpload = async (file) => {
    setUploading(true);
    const data = new FormData();
    data.append("image", file);
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_ADMINACC_TESTIMONIAL_URL}/api/upload`,
        data
      );
      setFormData((prev) => ({ ...prev, imageUrl: response.data.imageUrl }));
      setToast({ show: true, message: "Image uploaded!", type: "success" });
    } catch (error) {
      console.error("Upload error:", error);
      setToast({ show: true, message: "Upload failed", type: "error" });
    } finally {
      setUploading(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files.length > 0) {
      handleFileUpload(e.dataTransfer.files[0]);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (editMode && formData._id) {
        await axios.put(
          `${import.meta.env.VITE_ADMINACC_TESTIMONIAL_URL}/api/testimonials/${formData._id}`,
          formData
        );
        localStorage.removeItem("editTestimonial");
        setToast({
          show: true,
          message: "Testimonial updated successfully.",
          type: "success",
        });
      } else {
        await axios.post(
          `${import.meta.env.VITE_ADMINACC_TESTIMONIAL_URL}/api/testimonials`,
          formData
        );
        setToast({
          show: true,
          message: "Testimonial created successfully.",
          type: "success",
        });
        setFormData({
          imageUrl: "",
          mainTitle: "",
          quote: "",
          name: "",
          nationality: "",
          origin: "",
        });
      }

      setTimeout(() => navigate("/admin/alltestimonials"), 1500);
    } catch (err) {
      console.error("Submit failed:", err);
      setToast({
        show: true,
        message: "Submission failed. Please try again.",
        type: "error",
      });
    }
  };

  const handleClear = () => {
    setFormData({
      imageUrl: "",
      mainTitle: "",
      quote: "",
      name: "",
      nationality: "",
      origin: "",
    });
    setEditMode(false);
    localStorage.removeItem("editTestimonial");
  };

  return (
    <div className="flex h-full justify-center items-center">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 w-full max-w-xl shadow-md rounded-md border border-gray-100"
      >
        <h2 style={{ fontFamily: "Marcellus" }} className="text-2xl font-semibold mb-3">
          {editMode ? "Edit A Testimonial" : "Create A Testimonial"}
        </h2>
        <p className="pb-2 text-gray-600 text-sm">
          Fill out the form below to {editMode ? "update" : "add"} a client testimonial.
        </p>

        {editMode && (
          <>
            <p className="pt-4 text-gray-600 text-sm">
              Clear the form to reset or continue editing the testimonial below.
            </p>
            <button
              type="button"
              onClick={handleClear}
              className="bg-primary-800 w-full py-3 px-6 rounded-full font-medium flex gap-2 items-center justify-center hover:bg-primary-900 duration-300 disabled:opacity-50 mt-3 text-sm text-white hover:text-red-800 transition mb-4"
            >
              Clear Form Fields
            </button>
          </>
        )}

        {/* Drag and Drop Image Upload */}
        <div
          ref={dropRef}
          onDragOver={(e) => {
            e.preventDefault();
            setIsDragging(true);
          }}
          onDragLeave={() => setIsDragging(false)}
          onDrop={handleDrop}
          className={`border-dashed border-2 p-6 rounded-md text-center transition duration-300 ${
            isDragging ? "border-blue-500 bg-blue-50" : "border-gray-300"
          } mb-4`}
        >
          <div className="flex flex-col items-center justify-center gap-2">
            <ImagePlus size={28} />
            <p className="text-sm text-gray-600">
              Drag & drop an image here or use the button below
            </p>
            <div>
              <input
                type="file"
                accept="image/*"
                onChange={(e) =>
                  e.target.files[0] && handleFileUpload(e.target.files[0])
                }
                className="mt-2 w-full file:cursor-pointer file:mr-4 file:py-2 file:px-4 file:rounded file:border-[1.5px] file:bg-white file:text-primary-900"
              />
            </div>
            {uploading && (
              <p className="text-blue-600 text-sm mt-1">Uploading...</p>
            )}
            {formData.imageUrl && (
              <img
                src={formData.imageUrl}
                alt="Uploaded"
                className="w-full max-w-xs h-auto mt-4 rounded-md border"
              />
            )}
          </div>
        </div>

        {/* Fields: mainTitle, quote, name, nationality, origin */}
        {[
          { name: "mainTitle", label: "Main Title" },
          { name: "quote", label: "Quote" },
          { name: "name", label: "Name" },
          { name: "nationality", label: "Nationality" },
          { name: "origin", label: "Origin" },
        ].map(({ name, label }) => (
          <div className="mb-4" key={name}>
            <label className="block mb-1 text-sm font-medium">{label}</label>
            <input
              type="text"
              name={name}
              value={formData[name]}
              onChange={handleChange}
              className="w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder={`Enter ${label.toLowerCase()}`}
              required={["mainTitle", "quote", "name"].includes(name)}
            />
          </div>
        ))}

        {/* Submit Button */}
        <button
          type="submit"
          disabled={uploading}
          className="bg-primary-500 text-white w-full py-3 rounded-full font-medium flex gap-2 items-center justify-center hover:bg-primary-900 transition duration-300 disabled:opacity-50"
        >
          {editMode ? "Update Testimonial" : "Upload Testimonial"} <Send size={18} />
        </button>
      </form>

      {/* Notification Toast */}
      <Notification
        show={toast.show}
        type={toast.type}
        message={toast.message}
        onClose={() => setToast({ ...toast, show: false })}
      />
    </div>
  );
};

export default ManageTestimonials;
