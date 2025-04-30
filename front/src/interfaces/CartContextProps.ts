import { Product } from "./Product";

export interface CartContextProps {
  cart: Product[];
  setCart: (cart: Product[]) => void;
  cleanCart: () => void;
}
