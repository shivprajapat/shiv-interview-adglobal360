"use client";

import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Header, Preloader, Footer } from "@/components";

const PageLayout = ({ children }) => {
  let [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
    AOS.init({
      duration: 1200,
      easing: "ease-in-out-cubic",
      once: true,
    });
    AOS.refresh();
  }, []);
  return (
    <main className="min-h-screen flex-col flex-between">
      {!loading ? (
        <>
          <Header />
          {children}
          <Footer />
        </>
      ) : (
        <Preloader />
      )}
    </main>
  );
};

export default PageLayout;
