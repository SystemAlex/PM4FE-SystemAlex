import { Order } from "./Order";

export interface User {
  login: boolean;
  user: UserData;
  token: string;
}

interface UserData {
  id: number;
  name: string;
  email: string;
  address: string;
  phone: string;
  role: string;
  credential: Credential;
  orders: Order[];
}

interface Credential {
  id: number;
  password: string;
}
