"use client";

import { useParams } from "next/navigation";
import React from "react";

const blogPosts = [
  {
    id: 1,
    title: "First Post",
    content: "This is the content of the first post.",
  },
  {
    id: 2,
    title: "Second Post",
    content: "This is the content of the second post.",
  },
  {
    id: 3,
    title: "Third Post",
    content: "This is the content of the third post.",
  },
];

const BlogDetail = () => {
  const queryParams = useParams();
  const { id } = queryParams;

  const post = blogPosts.find((blog) => blog.id.toString() === id);
  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <div className="text-6xl font-bold mb-5">BlogDetail</div>
        <div className="gap-y-4 p-4 gap-x-4">
          <h2 className="text-3xl font-bold">{post.title}</h2>
          <p>{post.content}</p>
        </div>
      </div>
    </>
  );
};

export default BlogDetail;
