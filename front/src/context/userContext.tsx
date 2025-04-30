"use client";
import { createContext, useState, useEffect } from "react";
import { User } from "@/interfaces/User";
import { Order } from "@/interfaces/Order";
import { UserContextProps } from "../interfaces/UserContextProps";

export const UserContext = createContext<UserContextProps>({
  user: null,
  setUser: () => {},
  updateOrders: () => {},
});

const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const localUser = localStorage.getItem("user");
    setUser(localUser ? JSON.parse(localUser) : null);
  }, []);

  useEffect(() => {
    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
    } else {
      localStorage.removeItem("user");
    }
  }, [user]);

  const updateOrders = (order: Order) => {
    const newUser = user;
    newUser?.user.orders.push({
      id: order.id,
      status: order.status,
      date: order.date,
    });
    setUser(newUser);
    localStorage.setItem("user", JSON.stringify(user));
  };

  return (
    <UserContext.Provider value={{ user, setUser, updateOrders }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
