"use client";

import React, { useEffect, useState } from "react";

type Post = {
  id: number;
  title: string;
  content: string;
};

const BlogList = () => {
  const [posts, setPosts] = useState<Post[] | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/blog");
        if (response.ok) {
          const data = await response.json();
          setPosts(data);
        }
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };
    fetchPosts();
  }, []);

  if (!posts) {
    return <p className="text-center py-8">Loading posts...</p>;
  }

  return (
    <>
      <div>
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <li
              key={post.id}
              className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-shadow duration-300"
            >
              <h2 className="text-2xl font-semibold mb-3 text-gray-900">
                {post.title}
              </h2>
              <p className="text-gray-700">{post.content}</p>
              <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors duration-200">
                Read More
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default BlogList;
