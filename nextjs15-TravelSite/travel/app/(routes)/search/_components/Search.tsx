"use client";

import { useSearchParams } from "next/navigation";

const Search = () => {
  const searchParams = useSearchParams();
  const destianation = searchParams.get("destination");
  const activity = searchParams.get("activity");
  const duration = searchParams.get("duration");
  const price = searchParams.get("price");
  return (
    <div>
      <p>
        <strong>Destination:</strong>
        {destianation || "Not specified"}
      </p>
      <p>
        <strong>activity:</strong>
        {activity || "Not specified"}
      </p>
      <p>
        <strong>duration:</strong>
        {duration || "Not specified"}
      </p>
      <p>
        <strong>price:</strong>
        {price || "Not specified"}
      </p>
    </div>
  );
};

export default Search;
