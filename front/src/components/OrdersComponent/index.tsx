"use client";
import { useContext } from "react";
import { Order } from "@/interfaces/Order";
import { UserContext } from "@/context/userContext";
import { useRouter } from "next/navigation";

const formatDate = (isoDate: string): string => {
  const date = new Date(isoDate);
  return new Intl.DateTimeFormat("es-AR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hourCycle: "h23",
  }).format(date);
};

const OrdersComponent = () => {
  const { user } = useContext(UserContext);
  const router = useRouter();

  if (!user) return null;

  const handleMore = () => {
    router.push(`/products`);
  };

  const { orders } = user.user;

  return (
    <div className="container flex flex-col gap-5">
      <div className="flex justify-center items-center justify-items-center gap-5">
        <hr className="flex-grow !border-pink-600 border-2 border-dashed" />
        <p className="text-pink-600 text-center text-3xl">Your Orders</p>
        <hr className="flex-grow !border-pink-600 border-2 border-dashed" />
      </div>
      {orders.map((order: Order, i: number) => (
        <div
          key={i}
          className="flex justify-between gap-20 max-md:gap-5 items-center p-2 border mb-2 border-gray-300 rounded-lg bg-gray-50"
        >
          <p className="text-2xl">
            <span className="text-gray-700 font-bold">Order # </span>
            {order.id}
          </p>
          <p className="text-2xl">
            <span className="text-gray-700 font-bold">Date: </span>
            {formatDate(order.date)}
          </p>
          <p className="text-2xl">
            <span className="text-gray-700 font-bold">Status: </span>
            {order.status}
          </p>
        </div>
      ))}
      <button className="button mt-3 mb-3 self-center mx-auto" onClick={handleMore}>
        Buy More
      </button>
    </div>
  );
};

export default OrdersComponent;
