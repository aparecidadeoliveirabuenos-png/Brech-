export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  size: string;
  condition: 'Excellent' | 'Good' | 'Vintage';
}

export interface NavItem {
  label: string;
  href: string;
}
