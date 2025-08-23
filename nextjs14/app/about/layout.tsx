import Link from "next/link";

interface layoutProps {
  children: React.ReactNode;
}

const layout = ({ children }: layoutProps) => {
  return (
    <div className="flex flex-col items-center justify-center gap-10">
      {children}
      <div className="gap-8 flex flex-row">
        <Link className="p-5 bg-amber-600 rounded-2xl" href="/about/misyon">
          Misyon
        </Link>
        <Link className="p-5 bg-amber-600 rounded-2xl" href="/about/vizyon">
          Vizyon
        </Link>
        <Link className="p-5 bg-amber-600 rounded-2xl" href="/about/ekip">
          Ekip
        </Link>
      </div>
    </div>
  );
};

export default layout;
