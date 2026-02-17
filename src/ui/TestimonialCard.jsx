// testimonial = { name, message, company, role, imageUrl, ... }
import { Quote, } from "lucide-react";

const TestimonialCard = ({ testimonial }) => {
  return (
    // <div className="bg-white p-6 shadow-soft rounded-xl m-2">
    //     <h3 className="font-semibold mb-4">
    //         {testimonial.mainTitle}
    //     </h3>
    //   <p className="text-gray-600 italic mb-4">
    //     &ldquo;{testimonial.quote}&rdquo;
    //   </p>
    //   <div className="flex items-center gap-4">
    //     <img
    //       src={testimonial.imageUrl}
    //       alt={testimonial.name}
    //       className="w-12 h-12 rounded-full object-cover"
    //     />
    //     <div>
    //       <h4 className="font-semibold text-gray-800">{testimonial.name}</h4>
    //       <p className="text-sm text-gray-500">
    //         {testimonial.nationality}, {testimonial.origin}
    //       </p>
    //     </div>
    //   </div>
    // </div>
    <div className="flex flex-col items-center bg-white rounded-xl shadow-soft overflow-hidden md:m-2">
      {/*Top Image */}
      <div className="w-full h-64">
        <img
          src={testimonial.imageUrl}
          alt={testimonial.name}
          className="object-cover w-full h-full"
        />
      </div>

      {/* Bottom Content */}
      <div className="w-full p-6 space-y-2">
        <h4 className="text-primary-700 font-semibold text-base uppercase">
          {testimonial.mainTitle}
        </h4>

        <div className="relative text-gray-700 text-sm leading-relaxed">
          <Quote className="absolute -bottom-12 right-0 text-primary-500 w-6 h-6 opacity-60" />
          <p className="italic">“{testimonial.quote}”</p>
        </div>

        <div className="mt-4">
          <p className="font-semibold text-gray-900">{testimonial.name}</p>
          <p className="text-sm text-gray-500">
            {testimonial.nationality}
            {testimonial.origin && ` • ${testimonial.origin}`}
          </p>
        </div>
      </div>

    </div>
  );
};

export default TestimonialCard;
