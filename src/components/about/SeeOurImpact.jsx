import React from "react";
import { Activity } from "lucide-react";
import { Element } from "react-scroll";

export default function SeeOurImpact() {
  const impactData = [
    {
      title: "On Business",
      image: "https://img.freepik.com/free-photo/big-brother-surveillance-concept-composition_23-2150169372.jpg?uid=R110204670&ga=GA1.1.302447274.1684498652&semt=ais_incoming&w=740&q=80",
      // image: "https://img.freepik.com/free-photo/handsome-man-orange-jacket-holding-his-phone_23-2148448921.jpg?uid=R110204670&ga=GA1.1.302447274.1684498652&semt=ais_hybrid&w=740&q=80",
      content:
        "We empower investors and entrepreneurs to expand globally—leveraging migration options, business-friendly residencies, and real estate-led citizenship strategies that align with your long-term growth.",
    },
    {
      title: "On Society",
      image: "https://img.freepik.com/free-photo/kids-wearing-virtual-reality-goggles_23-2148943098.jpg?uid=R110204670&ga=GA1.1.302447274.1684498652&semt=ais_hybrid&w=740&q=80",
      content:
        "We help everyday people and families access international education, jobs, and healthcare—driving positive social mobility and rewriting stories of limitation into legacies of possibility.",
    },
    {
      title: "On the Global Stage",
      image: "https://img.freepik.com/free-photo/young-couple-talking-videocall-after-arriving-hotel-waiting-check-sitting-lounge-area-happy-tourists-resting-couch-using-online-videoconference-chat_482257-67513.jpg?uid=R110204670&ga=GA1.1.302447274.1684498652&w=740",
      content:
        "We promote legal, values-driven migration and responsible global citizenship that supports cultural exchange, cross-border investment, and ethical participation in the world economy.",
    },
  ];

  return (
    <Element name="seeourimpact" className="py-20 px-4 md:px-10 bg-white">
      <div className="mb-8 flex flex-col gap-4">
        <div className="flex items-center gap-4">
          <p className="bg-gray-100 rounded-full shadow py-1 px-3 font-semibold">
            <Activity />
          </p>
          <h2 className="text-gray-900">OUR IMPACT</h2>
        </div>
        <h2 className="text-2xl font-semibold text-gray-900">
          Global & International Mobility
        </h2>
        <p className="w-full lg:w-1/2">
          We guide individuals, families, and businesses through global
          mobility—offering ethical and effective migration, citizenship, and
          investment solutions that open doors to international opportunities in
          business, education, lifestyle, and security.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {impactData.map((item, index) => (
          <div key={index} className="flex flex-col gap-3">
            <img
              src={item.image}
              alt={item.title}
              className="mb-4 rounded-xl h-64 object-cover"
            />
            <h3
              className="text-xl font-semibold"
              style={{ fontFamily: "Marcellus" }}
            >
              {item.title}
            </h3>
            <p className="text-gray-700 leading-relaxed">{item.content}</p>
          </div>
        ))}
      </div>
    </Element>
  );
}
