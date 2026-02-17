import { useParams, Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchBlogById = async (id) => {
  const { data } = await axios.get(
    `https://mgc-blog-api.onrender.com/api/blogs/${id}`
  );
  return data;
};

const fetchAllBlogs = async () => {
  const { data } = await axios.get(
    "https://mgc-blog-api.onrender.com/api/blogs"
  );
  return data;
};

export default function BlogDetailsPage() {
  const { id } = useParams();

  const { data: blog, isLoading: loadingBlog } = useQuery({
    queryKey: ["blog", id],
    queryFn: () => fetchBlogById(id),
  });

  const { data: otherBlogs = [] } = useQuery({
    queryKey: ["blogs"],
    queryFn: fetchAllBlogs,
  });

  if (loadingBlog) return <p>Loading blog...</p>;
  if (!blog) return <p>Blog not found.</p>;

  return (
    <div className="px-4 pt-20 lg:pt-32 pb-20 md:px-10 grid grid-cols-1 md:grid-cols-4 gap-6">
      {/* Main Blog Content */}
      <div className="md:col-span-3">
        <img
          src={blog.imageUrl}
          alt={blog.title}
          className="w-full h-[400px] object-cover rounded-md mb-8"
        />
        <h1
          style={{ fontFamily: "Marcellus" }}
          className="text-2xl md:text-3xl font-bold mb-2"
        >
          {blog.title}
        </h1>
        <p className="text-gray-500 text-sm mb-4">
          Written by {blog.author} an article published on the{" "}
          <strong>{new Date(blog.createdAt).toLocaleDateString()}</strong>
        </p>
        {/* <div
          dangerouslySetInnerHTML={{ __html: blog.longDescription }}
          className="prose max-w-none"
        /> */}

        <div className="prose max-w-none space-y-4">
          {blog.longDescription
            .split(/(?<=\.)\s+/) // splits after every period followed by a space
            .map((paragraph, idx) => (
              <p key={idx}>{paragraph.trim()}</p>
            ))}
        </div>
        <p className="flex flex-wrap items-center gap-2 py-8 text-sm">
          Tags:{" "}
          {blog.tags.map((tag, index) => (
            <span key={index} className="bg-gray-100 px-4 py-1 rounded-full">
              {tag}
            </span>
          ))}
        </p>
      </div>

      {/* Side Navigation / Recommendations */}
      <aside className="md:col-span-1">
        <h2 className="text-xl font-semibold mb-4">Other Articles</h2>
        <div className="space-y-4">
          {otherBlogs
            .filter((b) => b._id !== id)
            .slice(0, 5)
            .map((other) => (
              <Link
                key={other._id}
                to={`/blog/${other._id}`}
                className="block hover:underline"
              >
                <div className="flex gap-3 items-center">
                  <img
                    src={other.imageUrl}
                    alt={other.title}
                    className="w-16 h-16 object-cover rounded-md"
                  />
                  <div className="text-sm">
                    <p className="font-semibold">{other.title}</p>
                    <p className="text-gray-500 text-xs">
                      {new Date(other.createdAt).toLocaleDateString()}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
        </div>
      </aside>
    </div>
  );
}
