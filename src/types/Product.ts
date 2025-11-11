export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  thumbnail: string;
  stock?: number;
}

export interface CartItem extends Product {
  quantity: number;
}
