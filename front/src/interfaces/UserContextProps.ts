import { User } from "./User";
import { Order } from "./Order";

export interface UserContextProps {
  user: User | null;
  setUser: (user: User | null) => void;
  updateOrders: (order: Order) => void;
}
