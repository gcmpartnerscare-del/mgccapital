import React from "react";
import { Link } from "react-router-dom";

export default function ProgramsCard({ country }) {
  const {
    name,
    region,
    investmentType,
    shortDescription,
    slug,
    category,
    imgSrc,
  } = country;

  const pagePath =
    category === "CBI"
      ? `/citizenship/${slug}`
      : category === "RBI"
      ? `/residency/${slug}`
      : `/programs/${slug}`; // fallback

  return (
    <div className="program-card">
      {imgSrc && (
        <img
          src={imgSrc}
          alt={name}
          className="w-full h-40 object-cover mb-4 rounded-xl"
        />
      )}
      <h3 style={{ fontFamily: "Marcellus" }} className="font-semibold mb-2">
        {name}
      </h3>
      <div className="flex gap-2">
        <p className="border p-1 w-max px-2 text-xs rounded-lg border-gray-500">
          {region}
        </p>
        <p className="border w-max p-1 px-2 text-xs rounded-lg border-gray-500">
          Program Type: {category}
        </p>
      </div>
      {/* <p className="mt-2">
        {shortDescription ||
          "Explore this destination for global mobility and economic security."}
      </p> */}
      {/* <Link to={pagePath} className="card-link block text-primary-600 pt-4">
          View Program &rarr;
        </Link> */}
    </div>
  );
}
