import Image from "next/image";
import React from "react";

const CartItem = () => {
  return (
    <>
      <div className="flex justify-between items-center mb-6 mt-6">
        <div className="flex justify-start items-start gap-6">
          <Image
            src={"/product_image.jpg"}
            width={90}
            height={90}
            alt="cart product"
          />
          <div>
            <h3 className="font-bold text-blue-500 text-xl">Product Name</h3>
            <p className="text-gray-500 text-lg mt-2">৳ 100</p>

            <div className="flex justify-start items-center mt-3">
              <button
                className="border-stone-950 p-2 font-bold text-xl"
                type="button"
              >
                -
              </button>
              <p className="p-2 font-bold text-xl">5</p>
              <button
                className="border-stone-950 p-2 font-bold text-xl"
                type="button"
              >
                +
              </button>
            </div>
          </div>
        </div>

        <div>
          <button
            className="h-10 px-6 font-semibold rounded-md bg-red-500 text-white"
            type="button"
          >
            Remove
          </button>
        </div>
      </div>
      <hr />
    </>
  );
};

export default CartItem;
