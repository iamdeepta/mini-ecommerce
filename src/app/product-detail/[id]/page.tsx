import ProductDetails from "@/app/components/ProductDetails";
import React from "react";

const ProductDetailPage = ({ params }: any) => {
  return (
    <div>
      <div className="flex justify-between items-center">
        <h2 className="font-bold text-lg">Product Detail</h2>
      </div>

      <div className="mt-3">
        <ProductDetails />
      </div>
    </div>
  );
};

export default ProductDetailPage;
