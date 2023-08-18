import { getSingleProduct } from "@/app/api/productApis";
import ProductDetails from "@/app/components/ProductDetails";

interface IParam {
  params: {
    id: number;
  };
}

const ProductDetailPage = async ({ params }: IParam) => {
  const singleProduct = await getSingleProduct(params.id);

  return (
    <div>
      <div className="flex justify-between items-center">
        <h2 className="font-bold text-lg">Product Detail</h2>
      </div>

      <div className="mt-3">
        <ProductDetails item={singleProduct} />
      </div>
    </div>
  );
};

export default ProductDetailPage;
