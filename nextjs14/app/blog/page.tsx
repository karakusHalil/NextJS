import BlogComponents from "../components/BlogComponents";

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

const Blog = () => {
  return (
    <>
      <div>
        <div className="mb-10 text-6xl font-extrabold">
          <h1>Blog Yazıları</h1>
        </div>

        <div>
          {blogPosts.map((post) => (
            <BlogComponents
              key={post.id}
              id={post.id?.toString()}
              title={post.title}
              content={post.content}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Blog;
