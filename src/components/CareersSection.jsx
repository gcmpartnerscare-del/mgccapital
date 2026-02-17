import React, { useState } from "react";
import { motion } from "framer-motion";
import { fadeInUp } from "../utils/animationlib";
import { Element } from "react-scroll";
import { Briefcase, Send } from "lucide-react";

// Mock Career Listings (replace with dynamic data source if needed)
const jobListings = [
  {
    id: 1,
    title: "Migration Program Consultant",
    location: "Lagos, Nigeria",
    department: "Consulting",
    type: "Full-time",
    description: "Guide clients through Citizenship and Residency Program options and manage onboarding process.",
  },
  {
    id: 2,
    title: "Client Services Representative",
    location: "Remote",
    department: "Support",
    type: "Remote",
    description: "Manage client inquiries, provide updates, and support relationship management.",
  },
  {
    id: 3,
    title: "Legal & Compliance Associate",
    location: "Abuja, Nigeria",
    department: "Legal",
    type: "Full-time",
    description: "Ensure program and client compliance with legal requirements of destination countries.",
  },
];

const departments = ["All", "Consulting", "Support", "Legal"];

const CareersSection = () => {
  const [filter, setFilter] = useState("All");

  const filteredJobs =
    filter === "All"
      ? jobListings
      : jobListings.filter((job) => job.department === filter);

  return (
    <Element name="careers" className="w-full">
      <section className="py-20 px-4 md:px-10 bg-white text-primary-700">
        <div className="max-w-4xl mx-auto mb-12 text-center">
          <motion.h2
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            className="text-4xl md:text-5xl font-bold"
          >
            Nurturing Careers While We Continue Building Global Bridges
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            className="text-gray-600 mt-4 max-w-2xl mx-auto"
          >
            GCM Capital is always seeking passionate individuals dedicated to migration, consulting,
            and global impact. Browse our open roles or send us your resume.
          </motion.p>
        </div>

        {/* Department Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {departments.map((dept) => (
            <button
              key={dept}
              onClick={() => setFilter(dept)}
              className={`px-4 py-2 rounded-full text-sm font-medium border ${
                filter === dept
                  ? "bg-primary-700 text-white"
                  : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
              } transition`}
            >
              {dept}
            </button>
          ))}
        </div>

        {/* Jobs Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredJobs.map((job) => (
            <div
              key={job.id}
              className="border border-gray-200 p-6 rounded-lg bg-gray-50 shadow-sm hover:shadow-md transition"
            >
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-lg font-semibold">{job.title}</h3>
                <Briefcase className="text-primary-700" size={20} />
              </div>
              <p className="text-sm text-gray-500">{job.description}</p>
              <div className="text-sm text-gray-700 mt-4 space-y-1">
                <p>
                  <strong>Location:</strong> {job.location}
                </p>
                <p>
                  <strong>Type:</strong> {job.type}
                </p>
                <p>
                  <strong>Department:</strong> {job.department}
                </p>
              </div>
              <button className="mt-4 w-full bg-primary-700 text-white py-2 rounded hover:bg-primary-800 transition text-sm font-medium">
                Apply Now
              </button>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-20 text-center">
          <p className="text-gray-700 text-lg font-medium">
            Don’t see a fit? We still want to hear from you.
          </p>
          <a
            href="/contact#form"
            className="mt-4 inline-flex items-center gap-2 bg-primary-700 text-white py-3 px-6 rounded-full hover:bg-primary-800 transition font-semibold"
          >
            Submit Resume
            <Send size={18} />
          </a>
        </div>
      </section>
    </Element>
  );
};

export default CareersSection;
