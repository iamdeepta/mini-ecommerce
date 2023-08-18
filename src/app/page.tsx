import { getAllCategories, getAllProducts } from "@/app/api/productApis";
import ProductCard from "./components/ProductCard";
import { IProduct } from "./interfaces/product";
import ProductList from "./components/ProductList";

const Home = async () => {
  const [products, categories] = await Promise.all([
    getAllProducts("", "asc"),
    getAllCategories(),
  ]);

  return (
    <>
      <ProductList products={products} categories={categories} />
    </>
  );
};

export default Home;
