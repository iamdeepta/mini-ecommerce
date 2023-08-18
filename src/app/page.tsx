import ProductCard from "./components/ProductCard";

export default function Home() {
  return (
    <div>
      <div className="flex justify-between items-center">
        <h2 className="font-bold text-lg">Product List</h2>

        <div className="flex justify-start gap-3 items-center">
          <label htmlFor="sort" className="text-sm">
            Sort By
          </label>
          <select
            id="sort"
            className="bg-gray-50 border border-blue-500 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-white-700 dark:border-white-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option>Select option</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
          </select>
        </div>

        <div className="flex justify-start gap-3 items-center">
          <select className="bg-gray-50 border border-blue-500 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-white-700 dark:border-white-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500">
            <option>Select category</option>
            <option>Shirt</option>
            <option>Pant</option>
          </select>
        </div>
      </div>

      <div className="flex justify-stretch items-center flex-wrap mt-5">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  );
}
