'use client'

import React, { useEffect, useState } from "react";
import ThemeToggler from "./ThemeToggler";
import Nav from "./Nav";
import MobileNav from "./MobileNav";
import Logo from "./Logo";
import { usePathname } from "next/navigation";


const Header = () => {
  const [header, setheader] = useState(false);
  const path = usePathname();

  useEffect(() => {
    const scrollYPos = window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setheader(true) : setheader(false);
    });
       
    return () => window.removeEventListener("scroll", scrollYPos);
  });

  return (
    <header
      className={`${
        header
          ? "py-4 bg-white shadow-lg dark:bg-accent"
          : "py-6 dark:bg-transparent"
      } sticky z-30 top-0 transition-all ${path === "/" && 'bg-[#fef9f5]'}`}
    >
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <Logo width={54} height={54} />
          <div className="flex items-center gap-x-6">
            <Nav
              containerStyles={"hidden xl:flex gap-x-8 items-center"}
              linkStyles={"relative hover:text-primary transition-all"}
              underlineStyles={
                "absolute left-0 top-full h-[2px] bg-primary w-full"
              }
            />
            <ThemeToggler />
            <div className="xl:hidden">
              <MobileNav />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
