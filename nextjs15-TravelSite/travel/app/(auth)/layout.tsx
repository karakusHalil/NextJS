"use client";

import { Loader2 } from "lucide-react";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

interface AuthLayoutProps {
  children: React.ReactNode;
}

const AuthLayout = ({ children }: AuthLayoutProps) => {
  const router = useRouter();
  const { data: session, status } = useSession();

  useEffect(() => {
    if (status === "authenticated") {
      router.push("/");
    }
  }, [status, router]);

  if (status === "loading") {
    return (
      <div className="flex items-center justify-center h-screen">
        <Loader2 size={48} className="animate-spin" />
      </div>
    );
  }

  if (session) {
    return null; // Authenticated users should not see the login/signup pages
  }
  return (
    <>
      <Link href="/" className="flex justify-center items-center my-4">
        <Image
          src={"/logo.png"}
          alt="Travel"
          width={210}
          height={50}
          className="w-36 lg:w-52 h-auto"
        />
      </Link>
      <div>{children}</div>
    </>
  );
};

export default AuthLayout;
