import Link from "next/link";
import React from "react";

const ProductCard = () => {
  return (
    <>
      <div className="flex font-sans m-3 flex-1 rounded-md bg-blue-50">
        <div className="flex-none w-48 relative">
          <Link href={"/product-detail/2"}>
            <img
              src="https://tailwindcss.com/_next/static/media/classic-utility-jacket.82031370.jpg"
              alt=""
              className="absolute inset-0 w-full h-full object-cover"
              loading="lazy"
            />
          </Link>
        </div>
        <form className="flex-auto p-6">
          <div className="flex flex-wrap">
            <Link href={"/product-detail/2"}>
              <h1 className="flex-auto text-lg font-semibold text-slate-900">
                classNameic Utility Jacket
              </h1>
              <div className="text-lg font-semibold text-slate-500">
                $110.00
              </div>

              <p className="mt-2">
                Category: <span className="font-bold">Shirt</span>
              </p>
            </Link>

            <div className="w-full flex-none text-sm font-medium text-slate-700 mt-2">
              Lorem ipsum dolor sit amet...
            </div>
          </div>

          <div className="flex space-x-4 mb-6 text-sm font-medium mt-3">
            <div className="flex-auto flex space-x-4">
              <button
                className="h-10 px-6 font-semibold rounded-md bg-blue-500 text-white"
                type="button"
              >
                Add to cart
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default ProductCard;
