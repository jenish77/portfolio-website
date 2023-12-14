"use client";
import Link from "next/link";
import React, { useState } from "react";
import NavLink from "./NavLink";
import MenuOverlay from "./MenuOverlay";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

const navLinks = [
  {
    title: "About",
    path: "#about",
  },
  {
    title: "Projects",
    path: "#projects",
  },
  {
    title: "Contact",
    path: "#contact",
  },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <nav className="fixed mx-auto border border-[#33353F] top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-100">
      <div className="flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-4 py-2">
      <Link href={"/"} className="text-2xl md:text-5xl text-white font-semibold" style={{ 
        textDecoration: 'none', /* Remove underline */
        fontFamily: 'Arial, sans-serif', /* Change font */
        letterSpacing: '1px', /* Adjust letter spacing */
        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.4)', /* Add text shadow */
        transition: 'transform 0.3s ease-in-out', /* Add transition effect */
        display: 'inline-block', /* Display as block element */
        border: '2px solid #9C27B0', /* Add border */
        padding: '10px 20px', /* Add padding */
        borderRadius: '5px', /* Add border radius */
      }}>
        Jenish Maru
      </Link>
        {/* <Link href={"/"} className="text-2xl md:text-5xl text-white font-semibold">
          LOGO
        </Link> */}
        <div className="mobile-menu block md:hidden">
          {!navbarOpen ? (
            <button onClick={() => setNavbarOpen(true)} className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white">
              <Bars3Icon className="h-5 w-5" />
            </button>
          ) : (
            <button onClick={() => setNavbarOpen(false)} className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white">
              <XMarkIcon className="h-5 w-5" />
            </button>
          )}
        </div>
        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink href={link.path} title={link.title} />
              </li>
            ))}
          </ul>
        </div>
      </div>
      {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
    </nav>
  );
};

export default Navbar;
