//get all products
export const getAllProducts = async (
  categoryPath: string | null,
  sort: string | null
) => {
  const response = await fetch(
    `https://fakestoreapi.com/products${categoryPath}?sort=${sort}`
  );

  if (!response) {
    throw new Error("Failed to fetch data");
  }

  const data = response.json();

  return data;
};

//get single product
export const getSingleProduct = async (id: number) => {
  const response = await fetch(`https://fakestoreapi.com/products/${id}`);

  if (!response) {
    throw new Error("Failed to fetch data");
  }

  const data = response.json();

  return data;
};

//get all categories
export const getAllCategories = async () => {
  const response = await fetch(`https://fakestoreapi.com/products/categories`);

  if (!response) {
    throw new Error("Failed to fetch data");
  }

  const data = response.json();

  return data;
};
