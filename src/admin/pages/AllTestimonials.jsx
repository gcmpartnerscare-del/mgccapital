import React, { useEffect, useState, useRef } from "react";
import TestimonialCard from "../ui/TestimonialCard"; // 🧩 You'll need this next
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import {
  ArrowLeft,
  ArrowRight,
  ChevronDown,
  ChevronUp,
  Quote,
} from "lucide-react";

const AllTestimonials = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const [sortBy, setSortBy] = useState("newest");
  const [loading, setLoading] = useState(true);
  const [filterBy, setFilterBy] = useState("");
  const [selectedTestimonial, setSelectedTestimonial] = useState(null);
  const navigate = useNavigate();
  const swiperRef = useRef(null);

  const fetchTestimonials = async () => {
    try {
      const { data } = await axios.get(
        `${import.meta.env.VITE_ADMINACC_TESTIMONIAL_URL}/api/testimonials`
      );
      setTestimonials(data);
    } catch (error) {
      console.error("Failed to fetch testimonials:", error);
    } finally {
      setLoading(false);
    }
  };

  const confirmDelete = async () => {
    try {
      if (selectedTestimonial) {
        await axios.delete(
          `${import.meta.env.VITE_ADMINACC_TESTIMONIAL_URL}/testimonials/${selectedTestimonial._id}`
        );
        setTestimonials((prev) =>
          prev.filter((item) => item._id !== selectedTestimonial._id)
        );
        setSelectedTestimonial(null);
      }
    } catch (err) {
      console.error("Failed to delete testimonial:", err);
    }
  };

  const handleEdit = (testimonial) => {
    localStorage.setItem("editTestimonial", JSON.stringify(testimonial));
    navigate("/admin/managetestimonials");
  };

  const sortedTestimonials = testimonials
    .filter((item) =>
      filterBy ? item.name.toLowerCase().includes(filterBy.toLowerCase()) : true
    )
    .sort((a, b) => {
      if (sortBy === "newest")
        return new Date(b.createdAt) - new Date(a.createdAt);
      if (sortBy === "oldest")
        return new Date(a.createdAt) - new Date(b.createdAt);
      if (sortBy === "name") return a.name.localeCompare(b.name);
      return 0;
    });

  useEffect(() => {
    fetchTestimonials();
  }, []);

  return (
    <div className="">
      {/* Header and Filter */}
      <div className="flex flex-col lg:flex-row lg:justify-between mb-6">
        <h2
          style={{ fontFamily: "Marcellus" }}
          className="text-2xl flex items-center justify-center gap-2 font-semibold text-center text-gray-800 mb-2 lg:mb-0"
        >
          <Quote size={20} />
          All Testimonials
        </h2>

        <div className="flex flex-col lg:flex-row items-center gap-2 justify-center relative">
          <div className="relative w-full">
            <button
              onClick={() => setShowDropdown(!showDropdown)}
              className="border px-6 py-2 rounded-full shadow flex items-center gap-2 min-w-[180px] justify-between text-left w-full lg:w-max"
            >
              {sortBy === "newest"
                ? "Sort: Newest"
                : sortBy === "oldest"
                ? "Sort: Oldest"
                : "Sort: Name"}
              {showDropdown ? (
                <ChevronUp className="w-4 h-4" />
              ) : (
                <ChevronDown className="w-4 h-4" />
              )}
            </button>
            {showDropdown && (
              <ul className="absolute z-50 mt-2 w-full bg-white shadow-lg rounded-md overflow-hidden">
                <li
                  onClick={() => {
                    setSortBy("newest");
                    setShowDropdown(false);
                  }}
                  className="hover:bg-gray-100 cursor-pointer px-4 py-2"
                >
                  Newest
                </li>
                <li
                  onClick={() => {
                    setSortBy("oldest");
                    setShowDropdown(false);
                  }}
                  className="hover:bg-gray-100 cursor-pointer px-4 py-2"
                >
                  Oldest
                </li>
                <li
                  onClick={() => {
                    setSortBy("name");
                    setShowDropdown(false);
                  }}
                  className="hover:bg-gray-100 cursor-pointer px-4 py-2"
                >
                  Name
                </li>
              </ul>
            )}
          </div>
          <input
            type="text"
            placeholder="Filter by Name"
            value={filterBy}
            onChange={(e) => setFilterBy(e.target.value)}
            className="w-full lg:w-max border px-6 py-2 rounded-full shadow focus:outline-none focus:ring-2 focus:ring-primary-500"
          />
        </div>
      </div>

      {/* Content */}
      {loading ? (
        <p className="text-center text-gray-500">Loading testimonials...</p>
      ) : sortedTestimonials.length === 0 ? (
        <p className="text-center text-gray-600">No testimonials found.</p>
      ) : (
        <>
          <Swiper
            modules={[Navigation, Pagination]}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            spaceBetween={10}
            pagination={{ clickable: true }}
            loop={true}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 1 },
              1024: { slidesPerView: 2 },
              1080: { slidesPerView: 3 },
            }}
          >
            {sortedTestimonials.map((item) => (
              <SwiperSlide key={item._id}>
                <TestimonialCard
                  testimonial={item}
                  onEdit={handleEdit}
                  onDelete={() => setSelectedTestimonial(item)}
                  isAdmin={true}
                />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Pagination Buttons */}
          <div className="flex flex-col items-center mt-4">
            <div className="flex justify-center gap-4 mb-2">
              <button
                onClick={() => swiperRef.current?.slidePrev()}
                className="p-2 rounded-full bg-primary-50 text-gray-800 shadow-md hover:bg-gray-50"
              >
                <ArrowLeft className="w-6 h-6" />
              </button>
              <button
                onClick={() => swiperRef.current?.slideNext()}
                className="p-2 rounded-full bg-primary-50 text-gray-800 shadow-md hover:bg-gray-50"
              >
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
      {selectedTestimonial && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
          <div className="bg-white rounded-lg p-6 max-w-md w-full shadow-xl">
            <h3 className="text-lg font-semibold mb-2 text-red-600">
              Are you sure?
            </h3>
            <p className="text-sm text-gray-600 mb-4">
              This action will permanently delete the testimonial by:{" "}
              <strong>{selectedTestimonial.name}</strong>
            </p>
            <div className="flex justify-end gap-4">
              <button
                onClick={() => setSelectedTestimonial(null)}
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

export default AllTestimonials;
