import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import Link from "next/link";

const MobileMenu = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="secondary" size="icon" className="md:hidden">
          <Menu className="h-4 w-4" />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle className="text-center mb-4">
            <Link href="/" className="text-black font-bold text-lg">
              LOGO
            </Link>
          </SheetTitle>
          <nav className="flex flex-col space-y-4 items-center">
            <Link
              href="/"
              className="text-black font-bold border-b-2 border-transparent hover:border-black pb-1"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-black font-bold border-b-2 border-transparent hover:border-black pb-1"
            >
              About
            </Link>
            <Link
              href="/blog"
              className="text-black font-bold border-b-2 border-transparent hover:border-black pb-1"
            >
              Blog
            </Link>
            <Link
              href="/contact"
              className="text-black font-bold border-b-2 border-transparent hover:border-black pb-1"
            >
              Contact
            </Link>
          </nav>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default MobileMenu;
