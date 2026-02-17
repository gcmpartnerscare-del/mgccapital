import React from "react";
import { Pencil, Quote, Trash2 } from "lucide-react";

const TestimonialCard = ({ testimonial, onEdit, onDelete, isAdmin }) => {
  const {
    imageUrl,
    mainTitle,
    quote,
    name,
    nationality,
    origin,
  } = testimonial;

  return (
    <div className="flex flex-col items-center bg-white rounded-xl shadow-soft overflow-hidden md:m-1">
      {/*Top Image */}
      <div className="w-full h-64">
        <img
          src={imageUrl}
          alt={name}
          className="object-cover w-full h-full"
        />
      </div>

      {/* Bottom Content */}
      <div className="w-full p-6 space-y-2">
        <h4 className="text-primary-700 font-semibold text-base uppercase">
          {mainTitle}
        </h4>

        <div className="relative text-gray-700 text-sm leading-relaxed">
          <Quote className="absolute -bottom-12 right-0 text-primary-500 w-6 h-6 opacity-60" />
          <p className="italic">“{quote}”</p>
        </div>

        <div className="mt-4">
          <p className="font-semibold text-gray-900">{name}</p>
          <p className="text-sm text-gray-500">
            {nationality}
            {origin && ` • ${origin}`}
          </p>
        </div>
      </div>

      {/* Buttons Section */}
      {isAdmin && (
        <div className="flex items-center justify-between w-full px-4 pb-4">
          <button
            onClick={() => onEdit(testimonial)}
            className="flex items-center gap-1 px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            <Pencil size={16} /> Edit
          </button>
          <button
            onClick={() => onDelete(_id)}
            className="flex items-center gap-1 px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
          >
            <Trash2 size={16} /> Delete
          </button>
        </div>
      )}
    </div>
  );
};

export default TestimonialCard;


// Slovenian Citizenship Pathway Testimonial & Success Stories