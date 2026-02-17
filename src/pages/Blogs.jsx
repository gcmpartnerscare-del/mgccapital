import React from "react";
import BlogSection from "../components/BlogSection";
import ContactSection from "../components/forms/ContactSection";
import DynamicPageHeader from "../components/common/DynamicPageHeader";
import BlogCard from "../ui/BlogCard.jsx";
import { useBlogs } from "../hooks/useBlogs";
import { CircleArrowOutDownRight } from "lucide-react";
import Newslettersection from "../components/Newlettersection.jsx";

const Blogs = () => {
  const { data: blogs = [], isLoading, isError } = useBlogs();

  return (
    <>
      <DynamicPageHeader />
      <div className="grid grid-cols-1 xl:grid-cols-2 max-w-7xl mx-auto pt-16">
        <div className="flex items-center gap-4">
          <p className="bg-gray-100 rounded-full shadow py-1 px-3 font-semibold">
            <CircleArrowOutDownRight />
          </p>
          <h3 className="">NEWS&MEDIA</h3>
        </div>

        <div className="order-3 xl:order-2 flex items-center gap-8 justify-center xl:justify-end">
          <div className="flex gap-2 items-center">
            <p className="">All Blogs</p>
            <div className="border-b w-32"></div>
            <p className="">{blogs.length}</p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 px-4 md:px-10 pt-10 pb-16 gap-4">
        {blogs.map((blog) => (
          <div key={blog._id} className="">
            <BlogCard
              title={blog.title}
              description={blog.shortDescription}
              status={blog.author}
              date={new Date(blog.createdAt).toLocaleDateString()}
              image={blog.imageUrl}
              path={`/blog/${blog._id}`}
            />
          </div>
        ))}
      </div>
      <Newslettersection />
      <ContactSection />
    </>
  );
};

export default Blogs;
