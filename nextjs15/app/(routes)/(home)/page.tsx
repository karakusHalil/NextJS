"use client";

import { Button } from "@/components/ui/button";
import useStore from "@/store/useStore";
import { useState } from "react";
import { set } from "zod";

export default function Home() {
  const { setText } = useStore();
  const [text, setTextLocal] = useState("");

  const handleLogoChange = () => {
    setText(text);
  };

  return (
    <>
      <div>
        <h1>Ana Sayfa</h1>
        <div className="mt-8">
          <h2 className="mb-2">Logo Change</h2>
          <input
            className="bg-white text-black p-2 rounded-md"
            type="text"
            onChange={(e) => setTextLocal(e.target.value)}
          />
          <Button className="ml-2" onClick={handleLogoChange}>
            Change Logo Text
          </Button>
        </div>
      </div>
    </>
  );
}
