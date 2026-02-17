import { ArrowUpRight, Info, Undo2 } from "lucide-react";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const AdminLoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    const adminEmail = import.meta.env.VITE_ADMINACC_EMAIL;
    const adminPassword = import.meta.env.VITE_ADMINACC_SAPS;

    if (email === adminEmail && password === adminPassword) {
      localStorage.setItem("correctAdminCreds", "true");
      setError("");
      navigate("/admin/dashboard");
    } else {
      setError("Invalid credentials");
    }
  };

  return (
    <div className="min-h-screen flex bg-white backdrop-blur-sm items-center">

      <div className="h-screen hidden xl:flex xl:w-[60%]">
        <img src="/images/adminLogin.png" alt="admin login image" className="w-full h-full object-cover object-center" />
      </div>

      <div className="flex flex-col justify-center items-center p-4 w-full xl:w-[40%]">
        <form
        onSubmit={handleLogin}
        className="bg-white p-6 w-full max-w-sm min-h-[450px]"
      >
        <h2 style={{fontFamily: "Marcellus",}} className="text-2xl font-semibold mb-4">GCM Admin Access</h2>

        <p className="pb-6">
          Login with correct credentials to access the Admin dashboard. 
        </p>
        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
        <div className="mb-4">
          <label className="block mb-1 text-sm font-medium">Email</label>
          <input
            type="email"
            className="w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={email}
            placeholder="Admin Access Email"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-6">
          <label className="block mb-1 text-sm font-medium">Password</label>
          <input
            type="password"
            className="w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={password}
            placeholder="Admin Access Password"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button
          type="submit"
          className="bg-primary-900 text-white w-full py-3 rounded font-medium hover:bg-primary-800 transition"
        >
          Login
        </button>
        <p className="flex items-start gap-1 pt-6">
        <Info size={18} /> Note verified Admin access only use the navigation links below to return to homepage or access clients resources.
        </p>
      </form>
      <div className="flex justify-center items-center gap-4 w-full">
        <Link to={"/"} className="bg-white py-3 px-4 rounded-lg hover:bg-primary-50 transition-all duration-300 flex gap-2 items-center border">
        <Undo2 size={16} /> Homepage
        </Link>
        <Link to={"/resources"} className="bg-white py-3 px-4 rounded-lg hover:bg-primary-50 transition-all duration-300 flex gap-2 items-center border">
        Clients Resources <ArrowUpRight size={16} />
        </Link>
      </div>
      </div>
    </div>
  );
};

export default AdminLoginPage;
