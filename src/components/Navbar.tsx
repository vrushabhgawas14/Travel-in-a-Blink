"use client";

import {
  hamburgerMenu,
  NavFirstHalf,
  NavSecondHalf,
} from "@/constants/NavbarDetails";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  let hamburger = hamburgerMenu.bar;

  hamburger = isOpen ? hamburgerMenu.cross : hamburgerMenu.bar;

  return (
    <>
      <div className="flex items-center justify-between fixed top-0 w-full text-2xl font-semibold py-10 z-10 sm:p-6">
        <div
          className={`flex justify-evenly w-[38%] py-2 ${
            isOpen ? "toggleNav firstHalf" : "sm:hidden"
          }`}
        >
          {NavFirstHalf.map((item) => (
            <a key={item.id} href={item.url} onClick={() => setIsOpen(false)}>
              {item.text}
            </a>
          ))}
        </div>
        <div className="text-center font-bold text-4xl w-[24%] sm:text-3xl sm:w-auto">
          <a href="/">Travel in a Blink</a>
        </div>
        <div
          className={`flex justify-evenly w-[38%] py-2 ${
            isOpen ? "toggleNav secondHalf" : "sm:hidden"
          }`}
        >
          {NavSecondHalf.map((item) => (
            <a key={item.id} href={item.url} onClick={() => setIsOpen(false)}>
              {item.text}
            </a>
          ))}
        </div>
        <div className="hidden sm:block sm:w-auto">
          <button className="w-6 h-6" onClick={() => setIsOpen(!isOpen)}>
            {hamburger}
          </button>
        </div>
      </div>
    </>
  );
}
