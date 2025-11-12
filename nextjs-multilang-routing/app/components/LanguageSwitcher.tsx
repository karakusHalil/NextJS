"use client";

import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";

export default function LanguageSwitcher() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname(); // /en/... veya /nl/...
  const router = useRouter();

  const currentLang = pathname.split("/")[1]; // "en" veya "nl"

  const toggleDropdown = () => setOpen(!open);

  const changeLanguage = (lang: string) => {
    const newPath = pathname.replace(`/${currentLang}`, `/${lang}`);
    router.push(newPath);
    setOpen(false); // seçtikten sonra kapat
  };

  // Diğer dili hesapla
  const otherLang = currentLang === "en" ? "nl" : "en";

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={toggleDropdown}
        className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
      >
        {currentLang.toUpperCase()}
      </button>

      {open && (
        <div className="absolute mt-2 w-24 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <button
            onClick={() => changeLanguage(otherLang)}
            className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
          >
            {otherLang.toUpperCase()}
          </button>
        </div>
      )}
    </div>
  );
}
