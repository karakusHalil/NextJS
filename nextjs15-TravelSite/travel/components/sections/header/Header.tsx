"use client";

import { MessageCircle, Phone, User, UserPlus } from "lucide-react";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import Link from "next/link";
import Image from "next/image";
import MobileMenu from "./MobileMenu";

import { navigationLinks } from "@/app/constants";
import MainSearch from "./MainSearch";
import { usePathname } from "next/navigation";
import { useSession } from "next-auth/react";

const Header = () => {
  const pathname = usePathname();

  const socialLinks = [
    {
      href: "#",
      icon: (
        <FaFacebookF className="text-white hover:text-orange-500" size={16} />
      ),
    },
    {
      href: "#",
      icon: (
        <FaXTwitter className="text-white hover:text-orange-500" size={16} />
      ),
    },
    {
      href: "#",
      icon: (
        <FaInstagram className="text-white hover:text-orange-500" size={16} />
      ),
    },
  ];

  const { data: session, status } = useSession();

  return (
    <header className="bg-black text-whitee">
      {/* Top Bar */}
      <div className="flex container mx-auto h-16 justify-center md:justify-between items-center px-4 py-2 text-sm">
        <div className="flex items-center gap-5">
          <div className="flex items-center gap-3">
            <div className="bg-white p-2 rounded-full">
              <MessageCircle size={12} className="text-orange-500" />
            </div>
            <p className="text-white">info@travel.com</p>
          </div>
          <div className="flex items-center gap-3">
            <div className="bg-white p-2 rounded-full">
              <Phone size={12} className="text-orange-500" />
            </div>
            <p className="text-white">0501 505 5005</p>
          </div>
        </div>

        <div
          className="hidden md:flex items-center space-x-4
        "
        >
          {socialLinks.map((link, index) => (
            <Link key={index} href={link.href}>
              {link.icon}
            </Link>
          ))}
        </div>
      </div>
      {/* Navigation Bar */}

      <div className="bg-white h-28 text-black shadow flex items-center">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <Image
            src={"/logo.png"}
            alt="Travel"
            width={210}
            height={50}
            className="w-36 lg:w-52 h-auto"
          />

          <nav className="hidden lg:flex space-x-8 text-lg font-semibold">
            {navigationLinks.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className={`${
                  pathname === link.href
                    ? "text-orange-500"
                    : "hover:text-orange-500"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="flex items-center space-x-4">
            <MainSearch />

            {session ? (
              <Link
                href="/profile"
                className="p-3 bg-red-400 cursor-pointer text-white rounded-full"
              >
                <UserPlus />
              </Link>
            ) : (
              <Link
                href="/login"
                className="p-3 bg-sky-400 cursor-pointer text-white rounded-full"
              >
                <UserPlus />
              </Link>
            )}
          
            <MobileMenu />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
