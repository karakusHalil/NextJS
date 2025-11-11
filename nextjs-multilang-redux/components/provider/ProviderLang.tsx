"use client";
import store from "@/store";
import React from "react";
import { Provider } from "react-redux";

interface ProviderLangProps {
  children: React.ReactNode;
}

const ProviderLang = ({ children }: ProviderLangProps) => {
  return (
    <>
      <Provider store={store}>{children}</Provider>
    </>
  );
};

export default ProviderLang;
