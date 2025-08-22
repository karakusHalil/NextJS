import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="bg-red-200">Home Page</div>

      <div>Home</div>

      <div className="flex gap-8">
        <Link href="/">Home</Link>
        <Link href="/dashboard">Dashboard</Link>
        <Link href="/doc">Doc</Link>
        <Link href="/doc/routing">Routing Doc</Link>
        <Link href="/doc/routing/menu1">Routing Menu1</Link>
        <Link href="/doc/routing/menu2">Routing Menu2</Link>
        <Link href="/catch/a/b/c/d/e">Catch All</Link>
      </div>
    </>
  );
}
