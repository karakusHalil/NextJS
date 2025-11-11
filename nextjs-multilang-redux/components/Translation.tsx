"use client";
import React from "react";
import en from "../locales/en.json";
import tr from "../locales/tr.json";
import de from "../locales/de.json";
import { useSelector } from "react-redux";
import { AppState } from "@/store";

const translations: { [key: string]: { [key: string]: string } } = {
  en,
  tr,
  de,
};

interface TranslationProps {
  id: string;
}

export default function Translation({ id }: TranslationProps) {
  const currentLanguage = useSelector(
    (state: AppState) => state.language.language
  );
  return <>{translations[currentLanguage][id]}</>;
}
