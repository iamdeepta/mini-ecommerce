"use client";
import { useDispatch, useSelector } from "react-redux";
import CartItem from "../components/CartItem";
import { RootState } from "../redux/store";
import { removeAll } from "../redux/cartSlice";
import { IProduct } from "../interfaces/product";

const CartPage = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cart);

  const cartItemsUnique = [...new Set(cartItems)];

  const clearAll = () => {
    dispatch(removeAll());
  };

  return (
    <>
      <div className="flex justify-between items-center">
        <h2 className="font-bold text-lg">Cart</h2>
        {cartItems.length > 0 && (
          <button
            className="h-10 px-6 font-semibold rounded-md bg-blue-500 text-white"
            type="button"
            onClick={() => clearAll()}
          >
            Clear Cart
          </button>
        )}
      </div>

      <div className="flex flex-col justify-start">
        {cartItems.length < 1 && (
          <p className="text-center text-lg">Cart is empty</p>
        )}
        {cartItemsUnique.map((item: IProduct) => {
          return <CartItem item={item} key={item.id} cartItems={cartItems} />;
        })}
      </div>

      {cartItems.length > 0 && (
        <div className="mt-6 mb-6">
          <p className="text-xl font-bold">
            Subtotal: ৳{" "}
            {cartItems.reduce((accum: number, currElem: IProduct) => {
              return accum + currElem.price;
            }, 0)}
          </p>
        </div>
      )}
    </>
  );
};

export default CartPage;
