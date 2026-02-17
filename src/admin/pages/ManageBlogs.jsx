import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { Send, ImagePlus } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Notification from "../ui/Notification";

const ManageBlogs = () => {
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    shortDescription: "",
    longDescription: "",
    tags: "",
    imageUrl: "",
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
    const blogToEdit = localStorage.getItem("editBlog");
    if (blogToEdit) {
      const parsed = JSON.parse(blogToEdit);
      setFormData({
        ...parsed,
        tags: Array.isArray(parsed.tags) ? parsed.tags.join(", ") : "",
      });
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
        `${import.meta.env.VITE_ADMINACC_BLOGS_URL}/api/upload`,
        data
      ); // <-- Fixed here
      setFormData((prev) => ({ ...prev, imageUrl: response.data.imageUrl }));
      setToast({
        show: true,
        message: "Image uploaded successfully!",
        type: "success",
      });
    } catch (error) {
      setToast({ show: true, message: "Image upload failed!", type: "error" });
      console.error("Upload error:", error);
    } finally {
      setUploading(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      handleFileUpload(e.dataTransfer.files[0]);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      ...formData,
      tags: formData.tags.split(",").map((tag) => tag.trim()),
    };

    try {
      if (editMode && formData._id) {
        await axios.put(
          `${import.meta.env.VITE_ADMINACC_BLOGS_URL}/api/blogs/${formData._id}`,
          payload
        );
        localStorage.removeItem("editBlog");
        setToast({
          show: true,
          message: "Blog updated successfully.",
          type: "success",
        });
      } else {
        await axios.post(
          `${import.meta.env.VITE_ADMINACC_BLOGS_URL}/api/blogs`,
          payload
        );
        setToast({
          show: true,
          message: "Blog created successfully.",
          type: "success",
        });
        setFormData({
          title: "",
          author: "",
          shortDescription: "",
          longDescription: "",
          tags: "",
          imageUrl: "",
        });
      }

      setTimeout(() => navigate("/admin/allblogs"), 1500);
    } catch (err) {
      console.error("Blog submit failed:", err);
      setToast({
        show: true,
        message: "Failed to submit blog. Please try again.",
        type: "error",
      });
    }
  };

  const handleClear = () => {
    setFormData({
      title: "",
      author: "",
      shortDescription: "",
      longDescription: "",
      tags: "",
      imageUrl: "",
    });
    setEditMode(false);
    localStorage.removeItem("editBlog");
  };

  return (
    <div className="flex h-full justify-center items-center">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 w-full max-w-xl shadow-md rounded-md border border-gray-100"
      >
        <h2
          style={{ fontFamily: "Marcellus" }}
          className="text-2xl font-semibold mb-3"
        >
          {editMode ? "Edit A Blog Post" : "Create A Blog Post"}
        </h2>
        <p className="pb-2 text-gray-600 text-sm">
          Fill out the Blog details below to {editMode ? "update" : "create"}{" "}
          and Post a New Blog Article.
        </p>

        {/* Clear Form field */}
        {editMode && (
          <>
            <p className="pt-4 text-gray-600 text-sm">
              Clear the Form Fields with this button below to start a new Blog
              Post or simply Resume your Update process and continue editing the
              selected Blog Post below
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

        {/* ✅ Drag and Drop Image Upload */}
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
              Drag & drop an image here or click below to select a file
            </p>
            <div className="flex flex-col items-center justify-center gap-2">
              <label
                htmlFor="imageUpload"
                className="text-sm font-medium text-gray-700"
              >
                Upload Image
              </label>
              <input
                type="file"
                accept="image/*"
                onChange={(e) =>
                  e.target.files[0] && handleFileUpload(e.target.files[0])
                }
                className="mt-2 w-full file:cursor-pointer file:mr-4 file:py-2 file:px-4 file:rounded file:border-[1.5px] file:bg-white file:text-primary-900
"
              />
            </div>
            {uploading && (
              <p className="text-blue-600 text-sm mt-1">Uploading...</p>
            )}
            {formData.imageUrl && (
              <img
                src={formData.imageUrl}
                alt="Uploaded preview"
                className="w-full max-w-xs h-auto mt-4 rounded-md border"
              />
            )}
          </div>
        </div>

        {/* Title + Short Description */}
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-4">
          {["title", "shortDescription"].map((field) => (
            <div className="mb-4" key={field}>
              <label className="block mb-1 text-sm font-medium capitalize">
                {field.replace(/([A-Z])/g, " $1")}
              </label>
              <input
                type="text"
                name={field}
                className="w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={formData[field]}
                onChange={handleChange}
                required
                placeholder={`Enter ${field}`}
              />
            </div>
          ))}
        </div>

        {/* Author + Tags */}
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-4">
          {["author", "tags"].map((field) => (
            <div className="mb-4" key={field}>
              <label className="block mb-1 text-sm font-medium capitalize">
                {field.replace(/([A-Z])/g, " $1")}
              </label>
              <input
                type="text"
                name={field}
                className="w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={formData[field]}
                onChange={handleChange}
                required
                placeholder={`Enter ${field}`}
              />
            </div>
          ))}
        </div>

        {/* Long Description */}
        <div className="mb-6">
          <label className="block mb-1 text-sm font-medium">
            Long Description
          </label>
          <textarea
            name="longDescription"
            rows="6"
            className="w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={formData.longDescription}
            onChange={handleChange}
            required
            placeholder="Enter full blog content here"
          ></textarea>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={uploading}
          className="bg-primary-500 text-white w-full py-3 rounded-full font-medium flex gap-2 items-center justify-center hover:bg-primary-900 transition duration-300 disabled:opacity-50"
        >
          {editMode ? "Update Blog" : "Upload Blog"} <Send size={18} />
        </button>
      </form>

      {/* ✅ Toast/Notification */}
      <Notification
        show={toast.show}
        type={toast.type}
        message={toast.message}
        onClose={() => setToast({ ...toast, show: false })}
      />
    </div>
  );
};

export default ManageBlogs;
