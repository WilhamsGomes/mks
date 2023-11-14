export type IProduct = {
  id: number;
  name: string;
  brand: string;
  description: string;
  photo: string;
  price: string;
  createdAt: string;
  updatedAt: string;
};

export type IProductCart = {
  id: number;
  name: string;
  photo: string;
  price: string;
  quantity: number;
};