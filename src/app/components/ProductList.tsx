"use client";

import { useEffect, useState } from "react";
import { IProduct } from "../interfaces/product";
import ProductCard from "./ProductCard";
import { getAllProducts } from "@/app/api/productApis";
import Loader from "./Loader";
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";

interface IProductList {
  products: IProduct[];
  categories: string[];
}

const ProductList = ({ products, categories }: IProductList) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const category = searchParams.get("category") ?? "";
  const sortOrder = searchParams.get("sort") ?? "asc";

  const [sortedProducts, setSortedProducts] = useState<IProduct[]>(products);
  const [loading, setLoading] = useState<boolean>(false);
  const [orderVal, setOrderVal] = useState<string>("asc");
  const [categoryVal, setCategoryVal] = useState<string>("");

  const sortByOrder = async (orderValue: string) => {
    setLoading(true);
    // setOrderVal(orderValue);
    setSortedProducts(await getAllProducts(category, orderValue));
    setLoading(false);
    router.push(`/?category=${category}&sort=${orderValue}`);
  };

  const filterByCategory = async (categoryValue: string) => {
    setLoading(true);
    // setCategoryVal(categoryValue);
    setSortedProducts(await getAllProducts(categoryValue, sortOrder));
    setLoading(false);
    router.push(`/?category=${categoryValue}&sort=${sortOrder}`);
  };

  return (
    <>
      <div>
        <div className="flex justify-between items-center">
          <h2 className="font-bold text-lg">Product List</h2>

          <div className="flex justify-start gap-3 items-center">
            <label htmlFor="sort" className="text-sm">
              Sort By
            </label>
            <select
              id="sort"
              className="bg-gray-50 border border-blue-500 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 bg-white-700 border-white-600 placeholder-gray-400"
              onChange={(e) => sortByOrder(e.target.value)}
            >
              <option value={"asc"}>Ascending</option>
              <option value={"desc"}>Descending</option>
            </select>
          </div>

          <div className="flex justify-start gap-3 items-center">
            <select
              className="bg-gray-50 border border-blue-500 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 bg-white-700 border-white-600 placeholder-gray-400"
              onChange={(e) => filterByCategory(e.target.value)}
            >
              <option value={""}>Select category</option>
              {categories.map((category: string) => {
                return (
                  <option key={category} value={`/category/${category}`}>
                    {category}
                  </option>
                );
              })}
            </select>
          </div>
        </div>

        <div className="flex justify-start items-start basis-1/4 w-full flex-wrap mt-5">
          {loading ? (
            <Loader />
          ) : (
            <>
              {sortedProducts.map((product: IProduct) => {
                return <ProductCard item={product} key={product.id} />;
              })}
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default ProductList;
