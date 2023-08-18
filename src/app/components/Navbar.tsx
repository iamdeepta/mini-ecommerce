"use client";

import Link from "next/link";
import { FiShoppingCart } from "react-icons/fi";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

const Navbar = () => {
  const product = useSelector((state: RootState) => state.cart);
  return (
    <div className="flex justify-between items-center sticky bg-blue-500 pl-20 pr-20 pt-5 pb-5">
      <Link href={"/"}>
        <p className="text-white text-lg font-bold">Mini E-Commerce</p>
      </Link>
      <Link href={"/cart"} className="relative">
        <FiShoppingCart className="cursor-pointer font-extrabold text-white text-2xl" />
        <p className="absolute rounded-full bg-red-500 text-white text-sm p-1 w-6 h-6 flex justify-center items-center -top-3 left-4">
          2
        </p>
      </Link>
    </div>
  );
};

export default Navbar;
