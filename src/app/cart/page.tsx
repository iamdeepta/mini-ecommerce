import CartItem from "../components/CartItem";

const CartPage = () => {
  return (
    <>
      <div className="flex justify-between items-center">
        <h2 className="font-bold text-lg">Cart</h2>
        <button
          className="h-10 px-6 font-semibold rounded-md bg-blue-500 text-white"
          type="button"
        >
          Clear Cart
        </button>
      </div>

      <div className="flex flex-col justify-start">
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
      </div>

      <div className="mt-6 mb-6">
        <p className="text-xl font-bold">Subtotal: ৳ 4000</p>
      </div>
    </>
  );
};

export default CartPage;
