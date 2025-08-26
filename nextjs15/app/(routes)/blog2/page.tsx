import BlogList from "@/components/BlogList";
import React from "react";

const Blog2Page = () => {
  return (
    <div>
      <div className="container mx-auto py-12 px-4 md:px-8">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-10">
          CSR Blog Posts
        </h1>
        <BlogList />
      </div>
    </div>
  );
};

export default Blog2Page;
