import React from "react";
import Header from "@/components/Header";
type props = {
  children: React.ReactNode;
};

//Rule of layout it needs to render children
const DashboardLayout = ({ children }: props) => {
  return (
    <>
      <Header />
      <main className="px-3 lg:px-14">{children}</main>
    </>
  );
};

export default DashboardLayout;
