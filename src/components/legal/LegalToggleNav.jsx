const LegalToggleNav = ({ activeTab, setActiveTab }) => {
  return (
    <div className="flex justify-center space-x-6">
      <button
        onClick={() => setActiveTab("privacy")}
        className={`px-6 py-3 rounded-full text-sm font-semibold ${
          activeTab === "privacy"
            ? "bg-primary-800 text-white"
            : "bg-gray-100 text-primary-900"
        }`}
      >
        Privacy Policy
      </button>
      <button
        onClick={() => setActiveTab("terms")}
        className={`px-6 py-3 rounded-full text-sm font-semibold ${
          activeTab === "terms"
            ? "bg-primary-800 text-white"
            : "bg-gray-100 text-primary-900"
        }`}
      >
        Terms of Use
      </button>
    </div>
  );
};

export default LegalToggleNav;
