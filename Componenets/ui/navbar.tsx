"use client";
import { useState } from "react";

import Image from "next/image";
import logo from "../../public/Component 1.svg";
import {
  FaArrowCircleDown,
  FaArrowDown,
  FaSearch,
  FaUser,
} from "react-icons/fa";
import Link from "next/link";

export function NavigationMenuDemo() {
  const [open, setOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(false);

  return (
    <>
      <nav className="bg-[#ffff] h-18 px-6 md-px-20 lg:px-52 py-5 flex justify-between items-center ">
        <Image src={logo} alt="logo image " width={200} height={100} />

        <ul className="hidden md:flex justify-center items-center py-4 gap-6 ">
          <li>
            <Link
              className="hover:text-sprinGreen duration-75 rounded-xl p-3"
              href={"/"}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className="hover:text-sprinGreen duration-75 rounded-xl p-3"
              href={"/shop"}
            >
              Shop
            </Link>
          </li>
          <li
            className=" duration-75 flex  rounded-xl p-3 relative"
            onClick={() => setOpenDropdown(!openDropdown)}
          >
            Components ^
            {/* <FaArrowDown className="size-6 rounded-full hover:text-sprinGreen " /> */}
            {openDropdown && (
              <ul className="absolute top-full left-0 mt-2 w-40 bg-white shadow-md rounded-md py-2">
                <li>
                  <Link
                    href="/categories"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    All categories
                  </Link>
                </li>

                <li>
                  <Link
                    href="/components/cards"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Cards
                  </Link>
                </li>

                <li>
                  <Link
                    href="/components/forms"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Forms
                  </Link>
                </li>
              </ul>
            )}
          </li>
          <li>
            <Link
              className="hover:text-sprinGreen duration-75 rounded-xl p-3"
              href={"/brands"}
            >
              Brands
            </Link>
          </li>
        </ul>
        {/* زرار المينيو يظهر في الموبايل فقط */}
        <button className="md:hidden " onClick={() => setOpen(true)}>
          ☰
        </button>

        {/* الخلفية */}
        {open && (
          <div
            className="fixed inset-0  bg-black/40"
            onClick={() => setOpen(false)}
          ></div>
        )}

        {/* Sidebar */}
        <div
          className={`fixed top-0 right-0 p-2 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 md:hidden ${
            open ? "translate-x-0" : "  translate-x-full"
          }`}
        >
          <button className="p-4" onClick={() => setOpen(false)}>
            ✕
          </button>

          <ul className="p-4 space-y-4">
            <li>
              <Link className="  " href={"/"}>
                Home
              </Link>
            </li>
            <li>
              <Link href={"/shop"}>Shop</Link>
            </li>
            <li
              className=" relative"
              onClick={() => setOpenDropdown(!openDropdown)}
            >
              Component ^
              {openDropdown && (
                <ul className="absolute top-full left-0 mt-2 w-40 bg-white shadow-md rounded-md py-2">
                  <li>
                    <Link
                      href="/components/buttons"
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      Buttons
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="/components/cards"
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      Cards
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="/components/forms"
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      Forms
                    </Link>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <Link href={"/brands"}>Brands</Link>
            </li>
          </ul>
          <button className="text-white w-full  hover:scale-[1.02] duration-75 flex justify-center items-center gap-1 bg-sprinGreen rounded-3xl p-3  cursor-pointer">
            <FaUser /> Sign in
          </button>
        </div>
        <button className="text-white  hidden  hover:scale-[1.02] duration-75 md:flex justify-center items-center gap-1 bg-sprinGreen rounded-3xl p-3  cursor-pointer">
          <FaUser /> Sign in
        </button>
      </nav>
    </>
  );
}
