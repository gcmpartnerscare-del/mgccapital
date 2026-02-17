import React, { useEffect, useState, useRef } from "react";
import {
  ChevronRight,
  CirclePlus,
  Send,
  ArrowLeft,
  ArrowRight,
  Layers,
} from "lucide-react";
import { Link } from "react-router-dom";
import axios from "axios";
import BlogCard from "../ui/BlogCard";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";

const Dashboard = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const swiperRef = useRef(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const { data } = await axios.get(
          `${import.meta.env.VITE_ADMINACC_BLOGS_URL}/api/blogs`
        );
        setBlogs(data);
      } catch (error) {
        console.error("Failed to fetch blogs:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchBlogs();
  }, []);

  return (
    <div>
      <h1
        style={{ fontFamily: "Marcellus" }}
        className="text-xl font-bold flex items-center gap-2 mb-4"
      >
        Dashboard{" "}
        <span className="flex gap-2 items-center text-sm text-gray-500">
          <ChevronRight size={16} />
          Admin Dashboard{" "}
        </span>
      </h1>

      <div className="bg-gradient-to-br from-primary-700 to-primary-500 text-white rounded-xl p-6">
        <h1
          style={{ fontFamily: "Marcellus" }}
          className="text-xl md:text-2xl font-bold mb-2"
        >
          Welcome Admin 👋
        </h1>
        <p className="text-base max-w-xl">
          Here's an overview of your latest blog content and actions you can
          take.
        </p>
        <p className="text-base max-w-xl mt-4">
          Publish, update or manage your blogs and testimonials efficiently.
        </p>
        <div className="pt-4 flex flex-col md:flex-row gap-4">
          <Link
            to="/admin/manageblogs"
            className="flex items-center gap-2 px-6 py-3 rounded-full bg-white hover:bg-primary-50 text-primary-800 justify-center md:w-max text-sm"
          >
            Create A New Blog
            <Send size={18} />
          </Link>
          <Link
            to="/admin/manageTestimonials"
            className="flex items-center gap-2 px-6 py-3 rounded-full bg-white hover:bg-primary-50 text-primary-800 justify-center md:w-max text-sm"
          >
            Add Testimonial
            <CirclePlus size={18} />
          </Link>
        </div>
      </div>

      <div className="mt-4">
        <div className="flex flex-col lg:flex-row gap-4 md:items-center justify-between mb-4">
          <h2
            style={{ fontFamily: "Marcellus" }}
            className="text-xl font-semibold text-gray-800 flex items-center gap-2"
          >
            <Layers size={18} /> Latest Blog Articles
          </h2>

          <div className="flex justify-between gap-4">
            {/* blog length numbering show total length here */}
            {/* <div className="flex gap-2 items-center">
              <p className="">01</p>
              <div className="border-b w-32"></div>
              <p className="">04</p>
            </div> */}
            <div className="flex gap-6 md:gap-4">
                <button
              onClick={() => swiperRef.current?.slidePrev()}
              className="p-2 rounded-full bg-primary-50 text-gray-800 shadow-md hover:bg-gray-50 focus:outline-none  transition-all duration-300"
            >
              <ArrowLeft size={18} />
            </button>
            <button
              onClick={() => swiperRef.current?.slideNext()}
              className="p-2 rounded-full bg-primary-50 text-gray-800 shadow-md hover:bg-gray-50 focus:outline-none  transition-all duration-300"
            >
              <ArrowRight size={18} />
            </button>
            </div>
          </div>
        </div>

        {loading ? (
          <p className="text-center text-gray-500">Loading blogs...</p>
        ) : blogs.length === 0 ? (
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
              {blogs.map((blog) => (
                <SwiperSlide key={blog._id}>
                  <BlogCard
                    blog={blog}
                    onEdit={() => {}}
                    onDelete={() => {}}
                    isAdmin={false}
                  />
                </SwiperSlide>
              ))}
            </Swiper>

            <style>
              {`
                .swiper-pagination-fraction,
                .swiper-pagination-custom,
                .swiper-horizontal > .swiper-pagination-bullets,
                .swiper-pagination-bullets.swiper-pagination-horizontal {
                  padding-top: 16px;
                  position: unset;
                }
              `}
            </style>
          </>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
