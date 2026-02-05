
export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  category: string;
  imageUrl: string;
}

export type Category = 'Todos' | 'Electrónica' | 'Hogar' | 'Accesorios' | 'Moda';
