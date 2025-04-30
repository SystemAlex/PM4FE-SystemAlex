"use client";
import { useContext } from "react";
import { buyOrder } from "@/services/ordersService";
import { CartContext } from "@/context/cartContext";
import { UserContext } from "@/context/userContext";
import { useRouter } from "next/navigation";
import FeaturedProducts from "../FeaturedProducts";
import { toast } from "react-toastify";

const CartComponent = () => {
  const { cart, cleanCart } = useContext(CartContext);
  const { user, updateOrders } = useContext(UserContext);
  const router = useRouter();

  const handleLog = () => {
    router.push(`/register`);
  };

  if (!user)
    return (
      <div className="flex justify-center items-center flex-col gap-5">
        <h2 className="text-pink-600 text-center">
          You must be registered and logged in.
        </h2>
        <button className="button mt-3 mb-3 self-center" onClick={handleLog}>
          Sing in
        </button>
      </div>
    );

  const handleCart = async () => {
    if (user) {
      const res = await buyOrder(cart, user);

      if (res.status === "approved") {
        updateOrders({ status: res.status, id: res.id, date: res.date });
        cleanCart();
        toast.success("Order approved successfully!");
        router.push(`/dashboard`);
      } else {
        toast.error(res.message);
      }
    } else {
      toast.error("Error!");
    }
  };

  const handleMore = () => {
    router.push(`/products`);
  };

  const initialOder = 0;
  const totalOrder = cart.reduce(
    (accumulator: any, currentValue: { price: any; }) => accumulator + currentValue.price,
    initialOder
  );

  return (
    <div>
      {!cart || cart.length === 0 ? (
        <div className="flex justify-center items-center flex-col gap-5">
          <h2 className="text-pink-600 text-center">Your cart is empty.</h2>
          <button className="button mt-3 mb-3 self-center" onClick={handleMore}>
            Start Buying
          </button>
          <FeaturedProducts />
        </div>
      ) : (
        <div className="flex flex-col gap-3">
          {cart.map((item: any) => (
            <div
              key={item.id}
              className="flex justify-between gap-15 items-center p-3  border border-gray-200 rounded-lg bg-white"
            >
              <p className="text-2xl">
                <span className="text-gray-700 font-bold">Product: </span>
                {item.name}
              </p>
              <p className="text-2xl">
                <span className="text-gray-700 font-bold">Price: </span>$
                {item.price.toLocaleString("es-AR", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
              </p>
            </div>
          ))}
          <div className="flex justify-between gap-20 max-md:gap-5 items-center p-2 border border-gray-200 rounded-lg bg-white">
            <h2 className="text-2xl font-bold">
              Total: $
              {totalOrder.toLocaleString("es-AR", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
            </h2>

            <button className="button mt-3 mb-3" onClick={handleCart}>
              Buy Order
            </button>
          </div>
          <button className="button mt-3 mb-3 self-center" onClick={handleMore}>
            Buy More
          </button>
        </div>
      )}
    </div>
  );
};

export default CartComponent;
