"use client";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components";

const Error = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push("/");
  };

  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 2000);
  }, [router]);

  return (
    <div className="h-screen w-screen grid place-items-center">
      <div className="bg-slate-100 text-center p-10 rounded w-3/4 sm:w-96">
        <h1 className="mb-3 sm:mb-8 text-2xl">404 Error Page</h1>
        <Button title="Back To Homepage" onClick={handleClick} />
      </div>
    </div>
  );
};

export default Error;
