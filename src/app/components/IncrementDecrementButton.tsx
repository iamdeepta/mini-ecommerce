interface IIncrementDecrementButton {
  cartItemDuplicateLength: number;
  addItem: () => void;
  removeOneItem: () => void;
}

const IncrementDecrementButton = ({
  cartItemDuplicateLength,
  addItem,
  removeOneItem,
}: IIncrementDecrementButton) => {
  return (
    <>
      <div className="flex justify-start items-center mt-3">
        <button
          className="border-stone-950 p-2 font-bold text-xl"
          type="button"
          onClick={() => removeOneItem()}
        >
          -
        </button>
        <p className="p-2 font-bold text-xl">{cartItemDuplicateLength}</p>
        <button
          className="border-stone-950 p-2 font-bold text-xl"
          type="button"
          onClick={() => addItem()}
        >
          +
        </button>
      </div>
    </>
  );
};

export default IncrementDecrementButton;
