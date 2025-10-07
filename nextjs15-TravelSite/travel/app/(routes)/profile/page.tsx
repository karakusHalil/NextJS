"use client";
import React from "react";
import { useSession, signOut } from "next-auth/react";
import { Button } from "@/components/ui/button";

const ProfilPage = () => {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <p>Loading...</p>;
  }
  if (!session) {
    return (
      <p className="text-red-500">You must be logged in to view this page.</p>
    );
  }
  return (
    <>
      <div className="p-6 max-w-md mx-auto mt-24 bg-white shadow-md rouneded">
        <h1 className="text-2xl font-bold mb-4">Profile Information</h1>
        <p>
          <strong>ID:</strong>
          {session.user?.id}
        </p>
        <p>
          <strong>First Name:</strong>
          {session.user?.firstName}
        </p>
        <p>
          <strong>Last Name:</strong>
          {session.user?.lastName}
        </p>
        <h2 className="mt-4 text-lg font-semibold">Token</h2>
        <pre className="bg-gray-100 p-2 rounded text-sm overflow-auto">
          {JSON.stringify(session.user, null, 2)}
        </pre>
        <Button onClick={()=>signOut({callbackUrl:"/login"})} className="mt-4 w-full bg-red-500 hover:bg-red-600 cursor-pointer text-white rounded-md">
          Singout
        </Button>
      </div>
    </>
  );
};

export default ProfilPage;
