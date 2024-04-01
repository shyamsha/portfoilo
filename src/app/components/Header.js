"use client";
import Link from "next/link";
import React from "react";

function Header() {
  return (
    <>
      <header className="py-4">
        <div className="mx-10 sm:mx-auto max-w-6xl px-4 flex justify-between items-center border border-zinc-600 p-3 rounded-full">
          {/* left part */}
          <div>
            <span className="text-xl text-white cursor-pointer font-bold ml-2">
              Syam Kumar
            </span>
            <span className="text-slate-400 font-bold"> Cherukuri</span>
          </div>
          {/* middle part */}
          <div className="hidden sm:flex flex-row space-x-4">
            <Link href="#about" className="text-white cursor-pointer">
              About
            </Link>

            <Link href="#skills" className="text-white cursor-pointer">
              Skills
            </Link>
            <Link href="#experience" className="text-white cursor-pointer">
              Experience
            </Link>

            <Link href="#contact" className="text-white cursor-pointer">
              Contact
            </Link>
          </div>
          {/* right part */}
          <div className="flex space-x-3 items-center">
            <button className="hidden md:inline-block text-white bg-blue-500 px-4 py-2 rounded-full">
              Linkedin
            </button>

            <button className="border cursor-pointer border-gray-500 px-4 py-2 text-white rounded-full">
              GitHub
            </button>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
