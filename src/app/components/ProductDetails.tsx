import Image from "next/image";
import { IProductItem } from "../interfaces/product";

const ProductDetails = ({ item }: IProductItem) => {
  return (
    <>
      <div className="flex font-sans m-3">
        <div className="flex-none w-60 relative">
          <Image
            src={item.image}
            alt="image"
            className="absolute inset-0 w-full h-80 object-cover"
            loading="lazy"
            height={140}
            width={240}
          />
        </div>
        <form className="flex-auto p-6">
          <div>
            <h1 className="flex-auto text-lg font-semibold text-slate-900">
              {item.title}
            </h1>

            <div className="text-lg font-semibold text-slate-500">
              ৳ {item.price}
            </div>
            <p className="mt-2">
              Category: <span className="font-bold">{item.category}</span>
            </p>

            <div className="w-full flex-none text-sm font-medium text-slate-700 mt-2">
              {item.description}
            </div>
          </div>

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

          <div className="flex space-x-4 mb-6 text-sm font-medium mt-7">
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

export default ProductDetails;
