"use client";

import React from "react";
import { Header, Footer } from "@/components";

const PageLayout = ({ children }) => {
  return (
    <main className="min-h-screen flex-col flex-between">
      <Header />
      {children}
      <Footer />
    </main>
  );
};

export default PageLayout;
