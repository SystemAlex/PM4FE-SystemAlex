import { User } from './User';
import { Products } from './Products';
export interface Order {
  id: number,
  status: string
  date: Date
  user: User,
  products: Products[]
}
