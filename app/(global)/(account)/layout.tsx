import ProfileSideNav from "@/components/molecules/navigation/profileSideNav";
import React from "react";

export default function AccountLayout({ children }: {
  children: React.ReactNode;
}) {
  return (
    <div className="container grid grid-cols-12 items-start gap-6 pt-4 pb-16">
    <ProfileSideNav />
    {children}
  </div>
  );
}