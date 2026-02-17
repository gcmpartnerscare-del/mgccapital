import React, { useRef } from "react";
import Slider from "react-slick";
import {
  ArrowRight,
  ArrowLeft,
  BarChart2,
  AtSign,
  Linkedin,
  CircleArrowOutDownRight,
} from "lucide-react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BlogCard from "../ui/BlogCard.jsx";
import { useBlogs } from "../hooks/useBlogs";
import { Link } from "react-router-dom";

const BlogSection = () => {
  const sliderRef = useRef(null);
  const { data: blogs = [], isLoading, isError } = useBlogs();

  // console.log(blogs)

  const handlePrev = () => sliderRef.current?.slickPrev();
  const handleNext = () => sliderRef.current?.slickNext();

  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="py-16 px-4 md:px-10 w-full bg-white">
      <div className="grid grid-cols-1 xl:grid-cols-2 max-w-7xl mx-auto">
        <div className="flex items-center gap-4">
          <p className="bg-gray-100 rounded-full shadow py-1 px-3 font-semibold">
            <CircleArrowOutDownRight />
          </p>
          <h3 className="">NEWS&MEDIA</h3>
        </div>

        <div className="order-3 pt-10 lg:pt-0 xl:order-2 flex items-center flex-col lg:flex-row gap-8 justify-center xl:justify-end">
          <div className="flex gap-2 items-center">
            <Link to={"/blogs"} className="">All Blogs
            </Link>
            <div className="border-b w-32"></div>
            <Link to={"/blogs"} className="">NewsRoom
            </Link>
          </div>
          <div className="flex justify-center gap-4">
            <button
              onClick={handlePrev}
              className="p-2 rounded-full bg-primary-50 text-gray-800 shadow-md hover:bg-gray-50"
            >
              <ArrowLeft className="w-6 h-6" />
            </button>
            <button
              onClick={handleNext}
              className="p-2 rounded-full bg-primary-50 text-gray-800 shadow-md hover:bg-gray-50"
            >
              <ArrowRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Featured Static Block (left column) */}
        <div className="order-2 xl:order-3 col-span-2 grid grid-cols-1 xl:grid-cols-4 gap-4 xl:gap-2 pt-10 mb-4">
          <div className="rounded-xl bg-gradient-to-b from-primary-800 to-primary-600 p-4 flex flex-col justify-between">
            <div className="flex gap-4">
              <span className="p-2 bg-gray-50 rounded-full bg-opacity-15">
                <BarChart2 size={16} className="text-white" />
              </span>
              <span className="p-2 bg-gray-50 rounded-full bg-opacity-15">
                <AtSign size={16} className="text-white" />
              </span>
              <span className="p-2 bg-gray-50 rounded-full bg-opacity-15">
                <Linkedin size={16} className="text-white" />
              </span>
            </div>
            {/* <div className="min-h-48 my-4 bg-[url(/images/globemonument.png)] h-full rounded-xl overflow-hidden bg-cover "></div> */}
            <div className="flex flex-col gap-2">
              <p className="text-white">
                Global Mobility Insights
              </p>
              <h3 className="text-2xl text-white">
                GCM Partners News and Trend Updates
              </h3>
              <p className="text-sm text-gray-100 line-clamp-2">
                Explore recent developments and Immigration insights from all
                around the globe brought to you on GCM Partners
              </p>
            </div>
          </div>

          {/* Replace the grid with react-slick slider */}
          <div className="col-span-1 xl:col-span-3">
            {isLoading ? (
              <p className="text-center text-gray-500">Loading blogs...</p>
            ) : isError ? (
              <p className="text-center text-red-500">Error loading blogs.</p>
            ) : (
              <Slider ref={sliderRef} {...settings}>
                {blogs.slice(0, 6).map((blog) => (
                  <div key={blog._id} className="px-2">
                    <BlogCard
                      title={blog.title}
                      description={blog.shortDescription}
                      status={blog.author}
                      date={new Date(blog.createdAt).toLocaleDateString()}
                      image={blog.imageUrl}
                      path={`/blog/${blog._id}`} // assumes a detail route exists
                    />
                  </div>
                ))}
              </Slider>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
