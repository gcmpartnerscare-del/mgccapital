import React from "react";
import { Link } from "react-router-dom";

/*Experts Insights, Financial Analytics, AI-powered Investment, Program Advisory*/

const BlogCard = ({ path, image, title, description, status, date }) => {
  return (
    <Link to={path} className="h-[450px] w-full flex flex-col bg-gray-50 group rounded-xl">
      <div className="h-[250px] w-full rounded-xl overflow-hidden ">
        <img
          src={image}
          alt={title}
          className="h-full w-full transition-all ease-in-out duration-500 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-col gap-4 p-4 justify-end">
        <div className="flex justify-between gap-4 items-center">
          <span className="status rounded-full bg-primary-500 text-white px-3 py-1 text-xs">
            {status}
          </span>
          <span className="text-xs text-gray-500">{date}</span>
        </div>
        <h3 className="font-semibold group-hover:text-primary-500">{title}</h3>
        <p className="text-sm text-gray-600 line-clamp-3">{description}</p>
      </div>
    </Link>
  );
};

export default BlogCard;



// import React from "react";
// import { Pencil, Trash2 } from "lucide-react";
// import { Link } from "react-router-dom";

// const BlogCard = ({ blog, onEdit, onDelete, isAdmin }) => {
//   const {
//     imageUrl,
//     title,
//     shortDescription,
//     tags = [],
//     createdAt,
//     updatedAt,
//     _id,
//   } = blog;

//   const formatDate = (dateString) => {
//     if (!dateString) return "";
//     const date = new Date(dateString);
//     return date.toLocaleDateString("en-US", {
//       year: "numeric",
//       month: "long",
//       day: "numeric",
//     });
//   };

//   const displayDate = createdAt || updatedAt ? formatDate(createdAt || updatedAt) : "";

//   const firstTwoTags = tags.slice(0, 2);
//   const remainingTagCount = tags.length - 2;

//   return (
//     <div className="h-max w-full flex flex-col bg-gray-50 group rounded-xl shadow-soft">
//       <div className="h-[250px] w-full overflow-hidden">
//         <img
//           src={imageUrl}
//           alt={title}
//           className="h-full w-full object-cover transition-all ease-in-out duration-500 group-hover:scale-105 rounded-xl"
//         />
//       </div>

//       <div className="flex flex-col gap-2 p-4 justify-end flex-grow">
//         <div className="flex justify-between gap-4 items-center">
//           <div className="flex gap-2 flex-wrap">
//             {firstTwoTags.map((tag, index) => (
//               <span
//                 key={index}
//                 className="rounded-full bg-primary-500 text-white px-3 py-1 text-xs"
//               >
//                 {tag.slice(0, 10)}
//               </span>
//             ))}
//             {remainingTagCount > 0 && (
//               <span className="rounded-full bg-gray-400 text-white px-2 py-1 text-xs">
//                 +{remainingTagCount}
//               </span>
//             )}
//           </div>

//           {displayDate && (
//             <span className="text-xs text-gray-500">{displayDate}</span>
//           )}
//         </div>

//         <h3 className="font-semibold group-hover:text-primary-500 truncate">
//           {title}
//         </h3>
//         <p className="text-sm text-gray-600 line-clamp-3">{shortDescription.slice(0, 90)}</p>
//       </div>

//       {/* Buttons Section */}
//       {isAdmin && (
//         <div className="flex justify-between px-4 pb-4">
//           <button
//             onClick={() => onEdit(blog)}
//             className="flex items-center gap-1 px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
//           >
//             <Pencil size={16} /> Edit
//           </button>
//           <button
//             onClick={() => onDelete(_id)}
//             className="flex items-center gap-1 px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
//           >
//             <Trash2 size={16} /> Delete
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default BlogCard;
