export interface IProduct {
  id: number;
  title: string;
  price: number;
  category: string;
  description: string;
  image: string;
}

export interface IProductItem {
  item: IProduct;
}
