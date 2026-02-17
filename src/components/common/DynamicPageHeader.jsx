// /src/components/common/DynamicPageHeader.jsx
import { useLocation } from "react-router-dom";
import { pageHeaderData } from "../../data/pageHeaderData";
import PageHeader from "./PageHeader";

const DynamicPageHeader = () => {
  const location = useLocation();
  const pathname = location.pathname;

  const config = pageHeaderData[pathname];

  if (!config) return null; // No header for routes not listed (like /citizenship, /residency)

  return <PageHeader {...config} />;
};

export default DynamicPageHeader;
