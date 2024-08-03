"use client";

import Footer from "@/components/molecules/footer";
import Header from "@/components/molecules/navigation/header";
import React from "react";

export default function AuthLayout({ children }: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full h-full">
      <Header />
      {children}
      <Footer />
    </div>
  );
}