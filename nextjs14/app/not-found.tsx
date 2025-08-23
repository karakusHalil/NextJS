import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center gap-10">
      <h2>Not Found</h2>
      <p>Could not find requested resource</p>
      <Link className="p-5 bg-red-600 rounded-4xl" href="/">
        Return Home
      </Link>
    </div>
  );
}
