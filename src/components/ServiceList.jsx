import { Plane, Landmark, Building2, Briefcase, DollarSign } from "lucide-react";

const services = [
  {
    title: "Visa & Migration Consulting",
    path: "/services#privateClients",
    icon: Plane,
  },
  {
    title: "Policy Engagement & Advisory",
    path: "/services#governmentadvisory",
    icon: Landmark,
  },
  {
    title: "Corporate Immigration",
    path: "/services#management",
    icon: Building2,
  },
  {
    title: "Business & Entrepreneur Migration",
    path: "/services#financial",
    icon: Briefcase,
  },
];

export default function ServicesList() {
  return (
    <ul className="grid grid-cols-1 gap-2 text-sm text-gray-700">
      {services.map(({ title, path, icon: Icon }) => (
        <li key={title}>
          <a
            href={path}
            className="flex items-center gap-3 border p-3 rounded-md shadow-sm hover:bg-gray-50 transition"
          >
            <Icon className="w-5 h-5 text-primary-500" />
            <span>{title}</span>
          </a>
        </li>
      ))}
    </ul>
  );
}
