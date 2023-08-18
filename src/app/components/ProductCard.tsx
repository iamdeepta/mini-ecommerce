"use client";

import Link from "next/link";
import { IProductItem } from "../interfaces/product";
import { useDispatch } from "react-redux";
import { add } from "../redux/cartSlice";

const ProductCard = ({ item }: IProductItem) => {
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(add(item));
  };

  return (
    <>
      <div className="flex font-sans m-3 flex-1 rounded-md bg-blue-50">
        <div className="flex-none w-48 relative">
          <Link href={`/product-detail/${item.id}`}>
            <img
              src={item.image}
              alt="product image"
              className="absolute inset-0 w-full h-full object-cover"
              loading="lazy"
            />
          </Link>
        </div>
        <form className="flex-auto p-6">
          <div className="flex flex-wrap">
            <Link href={`/product-detail/${item.id}`}>
              <h1 className="flex-auto text-lg font-semibold text-slate-900">
                {`${item.title.substring(0, 15)}...`}
              </h1>
              <div className="text-lg font-semibold text-slate-500">
                ৳ {item.price}
              </div>

              <p className="mt-2">
                Category: <span className="font-bold">{item.category}</span>
              </p>
            </Link>

            <div className="w-full flex-none text-sm font-medium text-slate-700 mt-2">
              {`${item.description.substring(0, 40)}...`}
            </div>
          </div>

          <div className="flex space-x-4 mb-6 text-sm font-medium mt-3">
            <div className="flex-auto flex space-x-4">
              <button
                className="h-10 px-6 font-semibold rounded-md bg-blue-500 text-white"
                type="button"
                onClick={() => addToCart()}
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
