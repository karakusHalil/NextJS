import Link from "next/link";

interface BlogComponentsProps {
  id?: string;
  title: string;
  content: string;
}

const BlogComponents = ({ content, id, title }: BlogComponentsProps) => {
  return (
    <>
      <div className="gap-y-4 p-4 gap-x-4">
        <Link href={`/blog/${id}`}>
          <h2 className="text-3xl font-bold">{title}</h2>
        </Link>
        <p>{content}</p>
      </div>
    </>
  );
};

export default BlogComponents;
