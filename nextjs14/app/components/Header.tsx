"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Header = () => {
  const pathname = usePathname();
  return (
    <div className="flex justify-between items-center bg-amber-300 pb-5 pt-5">
      <div className="ml-5 font-bold text-1xl">LOGO</div>
      <div className="flex items-center gap-24 mr-5">
        <div>
          <Link
            className={`p-3  ${pathname === "/" ? "underline" : ""}`}
            href="/"
          >
            Home
          </Link>
        </div>
        <div>
          <Link
            className={`p-3  ${pathname === "/blog" ? "underline" : ""}`}
            href="/blog"
          >
            Blog
          </Link>
        </div>
        <div>
          <Link
            className={`p-3  ${pathname === "/about" ? "underline" : ""}`}
            href="/about"
          >
            About
          </Link>
        </div>
        <div>
          <Link
            className={`p-3  ${pathname === "/contact" ? "underline" : ""}`}
            href="/contact"
          >
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
