"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import logo from "../../public/Component 1.svg";
import { FaHeadphones, FaHeart, FaShoppingCart, FaUser } from "react-icons/fa";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { useQuery } from "@tanstack/react-query";
import { CartData } from "@/interfaces/CartData";

import Header from "./Header";
import Navmenu from "./Navmenu";
import { FaHeartCirclePlus } from "react-icons/fa6";
export function NavigationMenuDemo() {
  const [open, setOpen] = useState(false);
  const { data, status } = useSession();
  const Name = data?.user?.name;
  const isLogin = status === "authenticated";
  const { data: Cartdata } = useQuery({
    queryKey: ["Cart"],
    queryFn: async () => {
      return fetch(`api/Cart`).then((payload) => payload.json());
    },
    staleTime: 1000 * 60 * 60 * 24,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    retry: false,
  });
  const Products: CartData = Cartdata?.data;
  const NumberofCartItem = Products?.products?.length;
  const [scroll, setscroll] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setscroll(window.scrollY >= 5);
    });
  }, [scroll]);
  return (
    <div className="">
      <Header />
      <nav
        className={`bg-white h-16 px-3 md:px-10 lg:px-20 py-4 flex  fixed z-50 left-0 right-0  ${scroll ? "top-0" : ""}   justify-between w-full m-auto items-center`}
      >
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
          <Navmenu />
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
            <li>
              <Link href={"/categories"}>Categories</Link>
            </li>
            <li>
              <Link href={"/brands"}>Brands</Link>
            </li>
          </ul>

          <ul className="border-t-2 p-4 space-y-4 border-border w-full">
            <div className="mt-3">
              <li>
                <Link
                  href={"/"}
                  className=" flex justify-start items-center gap-2"
                >
                  <FaHeartCirclePlus className="bg-[#FEF2F2] text-[#FB2C36] size-9 rounded-full" />{" "}
                  Wishlist
                </Link>
              </li>
            </div>
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
          <div className="  justify-center  flex items-center gap-3">
            <div className=" flex justify-center items-center gap-3 pr-3 border-r border-[#E5E7EB]">
              <div className="rounded-full size-10 bg-green-100 flex justify-center items-center">
                <FaHeadphones className="text-sprinGreen  " />
              </div>
              <div className=" flex flex-col gap-1.5">
                <p className=" text-gray-600">Support</p>
                <p className=" font-semibold">24/7 Help</p>
              </div>
            </div>
            <Link href={"/Cart"} className=" relative">
              <FaShoppingCart className="text-azure  text-2xl " />
              <span className=" absolute -top-3.5 -right-2.5 font-bold text-[10px]   rounded-full text-white flex justify-center items-center  bg-sprinGreen size-5">
                {NumberofCartItem}
              </span>
            </Link>
          </div>
        </div>
        <div className="  justify-center hidden md:flex items-center gap-3">
          <div className=" flex justify-center items-center gap-3 pr-3 border-r border-[#E5E7EB]">
            <div className="rounded-full size-10 bg-green-100 flex justify-center items-center">
              <FaHeadphones className="text-sprinGreen  " />
            </div>
            <div className=" flex flex-col gap-1.5">
              <p className=" text-gray-600">Support</p>
              <p className=" font-semibold">24/7 Help</p>
            </div>
          </div>
          <Link href={"/Cart"} className=" group relative">
            <FaShoppingCart className="text-azure group-hover:text-sprinGreen  text-2xl " />
            {isLogin && NumberofCartItem > 0 && (
              <span className=" absolute -top-3.5 -right-2.5 font-bold text-[10px]   rounded-full text-white flex justify-center items-center  bg-sprinGreen size-5">
                {NumberofCartItem}
              </span>
            )}
          </Link>
        </div>
      </nav>
    </div>
  );
}
