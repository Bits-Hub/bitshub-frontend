"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Welcome() {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/home");
    }, 2000);
  }, [router]);

  return (
    <div className="bg-gradient flex items-center justify-center h-screen">
      <div className="flex flex-col space-y-10">
        <h1 className="text-2xl md:text-5xl text-white text-center font-semibold md:leading-[4rem]">
          Welcome to the hub of bits.
        </h1>
      </div>
    </div>
  );
}
