import { API_URL } from "../../envs";
import { Product } from "@/interfaces/Product";
import { User } from "@/interfaces/User";

export const buyOrder = async (cart: Product[], user: User) => {
  const data = {
    userId: user.user.id,
    products: cart.map((product) => product.id),
  };

  const res = await fetch(`${API_URL}/orders`, {
    method: "POST",
    body: JSON.stringify(data),
    headers: { "Content-Type": "application/json", Authorization: user.token },
  });

  return await res.json();
};
