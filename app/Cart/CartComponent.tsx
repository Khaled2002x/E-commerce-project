import React from "react";
import { FaShoppingCart } from "react-icons/fa";

export default function CartComponent() {
  return (
    <div className="m-auto px-3 md:px-10 lg:px-20 py-4">
      <header className="flex flex-col gap-3">
        <div className=" flex justify-start items-center gap-2">
          <div className=" text-white size-12 p-2 bg-sprinGreen rounded-[12px]">
            <FaShoppingCart className=" size-9" />
          </div>
          <h2 className="m-0 font-bold text-2xl text-textGray">
            Shopping Cart
          </h2>
        </div>
        <p className=" font-medium">
          You have <span className="text-sprinGreen">4 items</span> in your cart
        </p>
      </header>
      <div className="mainContent">
        <div className="left"></div>
      </div>
    </div>
  );
}
