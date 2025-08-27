import React from "react";

type Post = {
  id: number;
  title: string;
  content: string;
};

const BlogPage = async () => {
  const res = await fetch("http://localhost:3000/api/blog", {
    cache: "no-store",
  });
  const posts: Post[] = await res.json();
  console.log(posts);
  return (
    <div className="container mx-auto py-12 px-4 md:px-8">
      <h1 className="text-4xl font-babes-neue font-bold text-center text-gray-800 mb-10">
        SSR Blog Posts
      </h1>

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
  );
};

export default BlogPage;
