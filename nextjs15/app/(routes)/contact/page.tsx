"use client";

import { RootState } from "@/rstore";
import { AppDispatch } from "@/rstore";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setText } from "@/rstore/rslice";
import { Input } from "@/components/ui/input";

const ContactPage = () => {
  const { footerText, headerText } = useSelector(
    (state: RootState) => state.ui
  );
  const dispatch = useDispatch<AppDispatch>();

  const handleUpdateText = (text: string) => {
    dispatch(setText(text));
  };

  return (
    <>
      <div className="space-y-3 flex flex-col">
        <div>
          {headerText} - {footerText}
        </div>

        <Input onChange={(e) => handleUpdateText(e.target.value)} />
      </div>
    </>
  );
};

export default ContactPage;
