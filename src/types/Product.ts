export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  thumbnail: string;
}

export interface CartItem extends Product {
  quantity: number;
}
