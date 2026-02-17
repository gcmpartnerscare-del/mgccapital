import { Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./layout/Navbar";
import ScrollToTop from "./layout/ScrollToTop";
import Footer from "./layout/Footer";
import WhatsAppWidget from "./components/common/WhatsappWidget";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import ElitePartnerships from "./pages/ElitePartnerships";
import Legal from "./pages/Legal";
import Resources from "./pages/Resources";

// Admin Pages
import AdminLoginPage from "./pages/AdminLoginPage";
import DashboardLayout from "./admin/layout/DashboardLayout";
import Dashboard from "./admin/pages/Dashboard";
import AllBlogs from "./admin/pages/AllBlogs";
import ManageBlogs from "./admin/pages/ManageBlogs";
import AllTestimonials from "./admin/pages/AllTestimonials";
import ManageTestimonials from "./admin/pages/ManageTestimonials";
import ProtectedRoute from "./admin/ProtectedRoute";
import BlogDetailsPage from "./pages/BlogDetailsPage";
import ResidencyCitizenship from "./pages/ResidencyCitizenship.jsx";
import MobileWidget from "./components/common/MobileWidget.jsx";
import FAQ from "./pages/FAQ.jsx";
import ConsultationForm from "./components/forms/ConsultationForm.jsx";
import GlobalAccessSolutions from "./pages/GlobalAccessSolutions.jsx";

function App() {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith("/admin");

  return (
    <>
      {/* Only show Navbar if NOT on an /admin route */}
      {!isAdminRoute && <Navbar />}

      <ScrollToTop />

      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blogs" element={<Blogs />} />
        

        <Route path="/globalresidency-citizenship" element={<ResidencyCitizenship />} />
        <Route path="/global-access-solutions" element={<GlobalAccessSolutions />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/legal" element={<Legal />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/faqs" element={<FAQ />} />
        <Route path="/services" element={<Services />} />
        <Route path="/elitepartnerships" element={<ElitePartnerships />} />
        <Route path="/blog/:id" element={<BlogDetailsPage />} />

        {/* Admin Login (Public Route) */}
        <Route path="/admin" element={<AdminLoginPage />} />

        {/* Protected Admin Routes */}
        <Route
          path="/admin/*"
          element={
            <ProtectedRoute>
              <DashboardLayout />
            </ProtectedRoute>
          }
        >
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="allblogs" element={<AllBlogs />} />
          <Route path="manageblogs" element={<ManageBlogs />} />
          <Route path="alltestimonials" element={<AllTestimonials />} />
          <Route path="managetestimonials" element={<ManageTestimonials />} />
        </Route>
      </Routes>

      {/* Only show Footer and WhatsAppWidget if NOT on an /admin route */}
      {!isAdminRoute && (
        <>
          <Footer />
          <ConsultationForm />
          <WhatsAppWidget />
          <MobileWidget />
        </>
      )}
    </>
  );
}

export default App;
