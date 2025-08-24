interface BlogComponentsProps {
  id?: string;
  title: string;
  content: string;
}

const BlogComponents = ({ content, id, title }: BlogComponentsProps) => {
  return (
    <>
      <div className="gap-y-4 p-4 gap-x-4">
        <h2 className="text-3xl font-bold">{title}</h2>
        <p>{content}</p>
      </div>
    </>
  );
};

export default BlogComponents;
