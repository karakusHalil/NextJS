import React from "react";

const BlogSlugPage = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params;
  return (
    <>
      <div>
        <h1>Blog Slug Page: {slug}</h1>
      </div>
    </>
  );
};

export default BlogSlugPage;
