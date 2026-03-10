"use client";
import { useState } from "react";

import Image from "next/image";
import logo from "../../public/Component 1.svg";
import { FaSearch } from "react-icons/fa";
import Link from "next/link";

export function NavigationMenuDemo() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="bg-[#ffff] h-18 px-52 py-5 flex justify-between items-center ">
        <div className="logo  ">
          <Image
            src={logo}
            alt="logo image "
            width={500}
            height={500}
            className="w-full "
          />
        </div>
        <div className="search hidden md:flex pt-4 pb-3.25 flex justify-between items-center w-[672px] pr-12 pl-5 border-border border rounded-4xl ">
          <input
            type="text"
            placeholder="Search for products, brands and more..."
            className=" outline-0"
          />
          <div className="bg-sprinGreen size-9 p-2 rounded-full">
            <FaSearch className="text-white " />
          </div>
        </div>
        <ul className="hidden md:flex justify-center items-center py-4 gap-6 ">
          <li>
            <Link href={"/"}>Home</Link>
          </li>
          <li>
            <Link href={"/shop"}>Shop</Link>
          </li>
          <li>
            {" "}
            {/* <NavigationMenuItem className=" md:flex">
              <NavigationMenuTrigger>Components</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-2 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                  {components.map((component) => (
                    <li>
                      <Link
                        key={component.title}
                        title={component.title}
                        href={component.href}
                      >
                        {component.description}
                      </Link>
                    </li>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem> */}
            Component
          </li>

          <li>
            <Link href={"/brands"}>Brands</Link>
          </li>
        </ul>
        {/* زرار المينيو يظهر في الموبايل فقط */}
        <button className="md:hidden " onClick={() => setOpen(true)}>
          ☰
        </button>

        {/* الخلفية */}
        {open && (
          <div
            className="fixed inset-0 bg-black/40"
            onClick={() => setOpen(false)}
          ></div>
        )}

        {/* Sidebar */}
        <div
          className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 md:hidden ${
            open ? "translate-x-0" : "  -translate-x-full"
          }`}
        >
          <button className="p-4" onClick={() => setOpen(false)}>
            ✕
          </button>

          <ul className="p-4 space-y-4">
            <li>Home</li>
            <li>Products</li>
            <li>Profile</li>
          </ul>
        </div>
      </nav>
    </>
  );
}
