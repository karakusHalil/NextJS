import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FaInstagram, FaFacebookF, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className="bg-black   text-white py-6">
        <div className="container mx-auto flex flex-col md:flex-row justify-between pl-4 pr-4 items-center ">
          <div className="text-center md:text-left space-p-4">
            <Link href="/" className="text-2xl text-white font-bold">
              Logo
            </Link>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
          <nav className="space-x-4 mt-8 md:mt-0">
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
              href="/contact"
              className="text-white font-bold border-b-2 border-transparent hover:border-white pb-1"
            >
              Contact
            </Link>
          </nav>
          <div className="flex flex-row space-x-4 mt-8 md:mt-0">
            <Button variant="secondary" className="hidden md:block ">
              <FaFacebookF />
            </Button>
            <Button variant="secondary" className="hidden md:block">
              <FaInstagram />
            </Button>
            <Button variant="secondary" className="hidden md:block">
              <FaLinkedinIn />
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
