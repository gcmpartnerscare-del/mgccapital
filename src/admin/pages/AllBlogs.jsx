import React, { useEffect, useState, useRef } from "react";
import BlogCard from "../ui/BlogCard";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { ArrowLeft, ArrowRight, ChevronDown, ChevronUp, Newspaper } from "lucide-react";

const AllBlogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const [sortBy, setSortBy] = useState("newest");
  const [loading, setLoading] = useState(true);
  const [filterTag, setFilterTag] = useState("");
  const [selectedBlog, setSelectedBlog] = useState(null); // 🆕 for modal
  const navigate = useNavigate();
  const swiperRef = useRef(null);

  const fetchBlogs = async () => {
    try {
      const { data } = await axios.get(`${import.meta.env.VITE_ADMINACC_BLOGS_URL}/api/blogs`);
      setBlogs(data);
    } catch (error) {
      console.error("Failed to fetch blogs:", error);
    } finally {
      setLoading(false);
    }
  };

  const confirmDelete = async () => {
    try {
      if (selectedBlog) {
        await axios.delete(`${import.meta.env.VITE_ADMINACC_BLOGS_URL}/api/blogs/${selectedBlog._id}`);
        setBlogs((prev) => prev.filter((blog) => blog._id !== selectedBlog._id));
        setSelectedBlog(null);
      }
    } catch (err) {
      console.error("Failed to delete blog:", err);
    }
  };

  const handleEdit = (blog) => {
    localStorage.setItem("editBlog", JSON.stringify(blog));
    navigate("/admin/manageblogs");
  };

  const sortedBlogs = blogs
    .filter((blog) => (filterTag ? blog.tags.includes(filterTag) : true))
    .sort((a, b) => {
      if (sortBy === "newest") return new Date(b.createdAt) - new Date(a.createdAt);
      if (sortBy === "oldest") return new Date(a.createdAt) - new Date(b.createdAt);
      if (sortBy === "author") return a.author.localeCompare(b.author);
      return 0;
    });

  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <div className="">
      {/* Header and Filter */}
      <div className="flex flex-col lg:flex-row lg:justify-between mb-6">
        <h2 style={{ fontFamily: "Marcellus" }} className="text-2xl flex items-center justify-center gap-2 font-semibold text-center text-gray-800 mb-2 lg:mb-0">
          <Newspaper size={20}/>All Blog Articles
        </h2>

        <div className="flex flex-col lg:flex-row items-center gap-2 justify-center relative">
          <div className="relative w-full">
            <button
              onClick={() => setShowDropdown(!showDropdown)}
              className="border px-6 py-2 rounded-full shadow flex items-center gap-2 min-w-[180px] justify-between text-left w-full lg:w-max"
            >
              {sortBy === "newest" ? "Sort: Newest" : sortBy === "oldest" ? "Sort: Oldest" : "Sort: Author"}
              {showDropdown ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </button>
            {showDropdown && (
              <ul className="absolute z-50 mt-2 w-full bg-white shadow-lg rounded-md overflow-hidden">
                <li onClick={() => { setSortBy("newest"); setShowDropdown(false); }} className="hover:bg-gray-100 cursor-pointer px-4 py-2">Newest</li>
                <li onClick={() => { setSortBy("oldest"); setShowDropdown(false); }} className="hover:bg-gray-100 cursor-pointer px-4 py-2">Oldest</li>
                <li onClick={() => { setSortBy("author"); setShowDropdown(false); }} className="hover:bg-gray-100 cursor-pointer px-4 py-2">Author</li>
              </ul>
            )}
          </div>
          <input
            type="text"
            placeholder="Filter by Tag"
            value={filterTag}
            onChange={(e) => setFilterTag(e.target.value)}
            className="w-full lg:w-max border px-6 py-2 rounded-full shadow focus:outline-none focus:ring-2 focus:ring-primary-500"
          />
        </div>
      </div>

      {/* Blog Content */}
      {loading ? (
        <p className="text-center text-gray-500">Loading blogs...</p>
      ) : sortedBlogs.length === 0 ? (
        <p className="text-center text-gray-600">No blogs found.</p>
      ) : (
        <>
          <Swiper
            modules={[Navigation, Pagination]}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            spaceBetween={20}
            pagination={{ clickable: true }}
            loop={true}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 1 },
              1024: { slidesPerView: 2 },
              1080: { slidesPerView: 3 },
            }}
          >
            {sortedBlogs.map((blog) => (
              <SwiperSlide key={blog._id}>
                <BlogCard
                  blog={blog}
                  onEdit={handleEdit}
                  onDelete={() => setSelectedBlog(blog)} // 👈 open modal
                  isAdmin={true}
                />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Pagination Buttons */}
          <div className="flex flex-col items-center mt-4">
            <div className="flex justify-center gap-4 mb-2">
              <button onClick={() => swiperRef.current?.slidePrev()} className="p-2 rounded-full bg-primary-50 text-gray-800 shadow-md hover:bg-gray-50">
                <ArrowLeft className="w-6 h-6" />
              </button>
              <button onClick={() => swiperRef.current?.slideNext()} className="p-2 rounded-full bg-primary-50 text-gray-800 shadow-md hover:bg-gray-50">
                <ArrowRight className="w-6 h-6" />
              </button>
            </div>
            <style>{`
              .swiper-horizontal > .swiper-pagination-bullets {
                padding-top: 28px;
                position: unset;
              }
            `}</style>
          </div>
        </>
      )}

      {/* 🧨 Confirmation Modal */}
      {selectedBlog && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
          <div className="bg-white rounded-lg p-6 max-w-md w-full shadow-xl">
            <h3 className="text-lg font-semibold mb-2 text-red-600">Are you sure?</h3>
            <p className="text-sm text-gray-600 mb-4">
              This action will permanently delete the blog titled: <strong>{selectedBlog.title}</strong>
            </p>
            <div className="flex justify-end gap-4">
              <button
                onClick={() => setSelectedBlog(null)}
                className="px-4 py-2 rounded-md border border-gray-300 text-gray-700 hover:bg-gray-100"
              >
                Cancel
              </button>
              <button
                onClick={confirmDelete}
                className="px-4 py-2 rounded-md bg-red-600 text-white hover:bg-red-700"
              >
                Confirm Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AllBlogs;
