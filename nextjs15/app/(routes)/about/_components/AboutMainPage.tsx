"use client";

import { Button } from "@/components/ui/button";
import React, { useEffect, useState } from "react";

const AboutMainPage = () => {
  const [count, setCount] = useState<number>(0);

  const handleIncrease = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    document.title = `Count: ${count}`;
  }, [count]);

  return (
    <div className="space-x-2 space-y-3">
      <h2>{count}</h2>
      <Button onClick={handleIncrease}>Increase</Button>
      <Button onClick={() => setCount(0)}>Reset</Button>
    </div>
  );
};

export default AboutMainPage;
