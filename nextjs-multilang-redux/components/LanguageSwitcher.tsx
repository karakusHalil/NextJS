"use client";
import { useDispatch, useSelector } from "react-redux";
import { AppState, AppDispatch } from "@/store";
import { setLanguage } from "@/store/languageSlice";

const LanguageSwitcher = () => {
  const dispatch = useDispatch<AppDispatch>();
  const currentLanguage = useSelector(
    (state: AppState) => state.language.language
  );

  const changeLanguage = (lang: string) => dispatch(setLanguage(lang));

  return (
    <div className="flex gap-3">
      <button onClick={() => changeLanguage("en")}>EN</button>
      <button onClick={() => changeLanguage("tr")}>TR</button>
      <button onClick={() => changeLanguage("de")}>DE</button>
    </div>
  );
};

export default LanguageSwitcher;
