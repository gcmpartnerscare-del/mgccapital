// components/LanguageSelector.jsx
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { ChevronDown, ChevronUp } from "lucide-react";

const languages = {
  en: { label: "English", flag: "/icons/usFlag.png" },
  fr: { label: "Français", flag: "/icons/frFlag.png" },
  yoruba: { label: "Yoruba", flag: "/icons/yorubaFlag.png" },
  hausa: { label: "Hausa", flag: "/icons/hausaFlag.png" },
  igbo: { label: "Igbo", flag: "/icons/igboFlag.png" },
};

const LanguageSelector = () => {
  const { i18n } = useTranslation();
  const currentLang = i18n.language || "en";
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setDropdownOpen(false);
  };

  return (
    <div className="relative">
      <div
        className="flex items-center gap-1 cursor-pointer"
        onClick={() => setDropdownOpen((prev) => !prev)}
      >
        <img
          src={languages[currentLang]?.flag}
          alt="Lang"
          className="w-[18px] h-[18px] rounded-full object-cover"
        />
        <span className="ml-1">{languages[currentLang]?.label}</span>
        {dropdownOpen ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
      </div>

      {dropdownOpen && (
        <div className="absolute top-full right-0 bg-white border border-gray-200 shadow-md z-50 rounded mt-2 w-[160px]">
          {Object.entries(languages).map(([lng, { label, flag }]) => (
            <div
              key={lng}
              onClick={() => changeLanguage(lng)}
              className="flex items-center px-3 py-2 hover:bg-gray-100 cursor-pointer"
            >
              <img src={flag} alt={label} className="w-[16px] h-[16px] mr-2 rounded-full" />
              {label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;
