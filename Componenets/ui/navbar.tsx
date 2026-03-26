"use client";
import { useState } from "react";

import Image from "next/image";
import logo from "../../public/Component 1.svg";
import { FaUser } from "react-icons/fa";
import Link from "next/link";
import { useSession } from "next-auth/react";
export function NavigationMenuDemo() {
  const [open, setOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(false);
  const { data, status } = useSession();
  const Name = data?.user?.name;
  const isLogin = status === "authenticated";
  return (
    <>
      <nav className="bg-white h-16 px-3 md:px-10 lg:px-20 py-4 flex justify-between w-full m-auto items-center">
        {" "}
        <Image src={logo} alt="logo image " width={200} height={100} />
        <ul className="hidden lg:flex justify-center items-center py-4 gap-6 ">
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
              <ul className="absolute top-0 bottom-0 z-50 left-0 mt-2 w-40 bg-white shadow-md rounded-md py-2">
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
        <button className="lg:hidden  ms-auto" onClick={() => setOpen(!open)}>
          ☰
        </button>
        {/* الخلفية */}
        {open && (
          <div
            className="fixed   bg-black/40"
            onClick={() => setOpen(false)}
          ></div>
        )}
        {/* Sidebar */}
        <div
          className={`fixed top-0  z-100 right-0 p-2 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 md:hidden ${
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
          <div className=" flex flex-col gap-2">
            {isLogin ? (
              <p> hi {Name?.split(" ")[0]}</p>
            ) : (
              <Link
                href={"/auth/login"}
                className="text-white w-full  hover:scale-[1.02] duration-75 flex justify-center items-center gap-1 bg-sprinGreen rounded-3xl p-3  cursor-pointer"
              >
                <FaUser /> Sign in
              </Link>
            )}
            {isLogin ? (
              ""
            ) : (
              <Link
                href={"/auth/register"}
                className="text-white w-full    hover:scale-[1.02] duration-75 flex justify-center items-center gap-1 bg-sprinGreen rounded-3xl p-3  cursor-pointer"
              >
                <FaUser /> Register
              </Link>
            )}
          </div>
        </div>
        <div className=" flex justify-center items-center gap-3">
          {isLogin ? (
            <p className="bg-sprinGreen hidden lg:block p-2 text-white rounded-2xl">
              hi {Name?.split(" ")[0]}
            </p>
          ) : (
            <Link
              href={"/auth/login"}
              className="text-white w-full  hidden   hover:scale-[1.02] duration-75 lg:flex justify-center items-center gap-1 bg-sprinGreen rounded-3xl p-3  cursor-pointer"
            >
              <FaUser />
              sign In
            </Link>
          )}
          {isLogin ? (
            ""
          ) : (
            <Link
              href={"/auth/register"}
              className="text-white  hidden  hover:scale-[1.02] duration-75 lg:flex justify-center items-center gap-1 bg-sprinGreen rounded-3xl p-3  cursor-pointer"
            >
              <FaUser /> Register
            </Link>
          )}
        </div>
      </nav>
    </>
  );
}
