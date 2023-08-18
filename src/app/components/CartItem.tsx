"use client";

import Image from "next/image";
import { IProduct } from "../interfaces/product";
import { useDispatch } from "react-redux";
import { add, remove, removeOne } from "../redux/cartSlice";
import IncrementDecrementButton from "./IncrementDecrementButton";

interface ICart {
  item: IProduct;
  cartItems: IProduct[];
}

const CartItem = ({ item, cartItems }: ICart) => {
  const dispatch = useDispatch();
  const removeItem = () => {
    dispatch(remove(item.id));
  };

  const addItem = () => {
    dispatch(add(item));
  };

  const removeOneItem = () => {
    dispatch(removeOne(item.id));
  };

  const cartItemDuplicate = cartItems.filter((itm: IProduct) => itm.id === item.id);

  const cartItemDuplicateLength = cartItemDuplicate.length;

  return (
    <>
      <div className="flex justify-between items-center mb-6 mt-6">
        <div className="flex justify-start items-start gap-6">
          <Image src={item.image} width={90} height={90} alt="cart product" />
          <div>
            <h3 className="font-bold text-blue-500 text-xl">{item.title}</h3>
            <p className="text-gray-500 text-lg mt-2">৳ {item.price}</p>

            <IncrementDecrementButton
              cartItemDuplicateLength={cartItemDuplicateLength}
              addItem={addItem}
              removeOneItem={removeOneItem}
            />
          </div>
        </div>

        <div>
          <button
            className="h-10 px-6 font-semibold rounded-md bg-red-500 text-white"
            type="button"
            onClick={() => removeItem()}
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
