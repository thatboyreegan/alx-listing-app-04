export interface CardProps {}

export interface ButtonProps {}

export interface PropertyProps {
  description: ReactNode;
  name: string;
  address: {
    state: string;
    city: string;
    country: string;
  };
  rating: number;
  category: string[];
  price: number;
  offers: {
    bed: string;
    shower: string;
    occupants: string;
  };
  image: string;
  discount: string;
}

export interface PropertyCategoriesProps {
    id: number;
    imageUrl: string;
    title: string;
}