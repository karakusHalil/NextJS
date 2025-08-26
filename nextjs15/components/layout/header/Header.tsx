import { Button } from "@/components/ui/button";
import { Menu, Search, User } from "lucide-react";
import Link from "next/link";
import MobileMenu from "./MobileMenu";

const Header = () => {
  return (
    <div className="bg-mysecondarycolor shadow-sm top-0 z-50">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        <Link href="/" className="text-white font-bold text-lg">
          LOGO
        </Link>
        <nav className="hidden md:flex space-x-6">
          <Link
            href="/"
            className="text-white font-bold border-b-2 border-transparent hover:border-white pb-1"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="text-white font-bold border-b-2 border-transparent hover:border-white pb-1"
          >
            About
          </Link>
          <Link
            href="/blog"
            className="text-white font-bold border-b-2 border-transparent hover:border-white pb-1"
          >
            Blog
          </Link>
          <Link
            href="/blog2"
            className="text-white font-bold border-b-2 border-transparent hover:border-white pb-1"
          >
            Blog2
          </Link>
          <Link
            href="/contact"
            className="text-white font-bold border-b-2 border-transparent hover:border-white pb-1"
          >
            Contact
          </Link>
        </nav>
        <div className="flex items-center space-x-2">
          <Button variant="secondary" size="icon">
            <Search className="h-4 w-4" />
          </Button>
          <Link href="/login">
            <Button variant="secondary" size="icon">
              <User className="h-4 w-4" />
            </Button>
          </Link>

          <MobileMenu />
        </div>
      </div>
    </div>
  );
};

export default Header;
