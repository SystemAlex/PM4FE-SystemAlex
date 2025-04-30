"use client";
import { useContext } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { UserContext } from "@/context/userContext";
import { CartContext } from "@/context/cartContext";
import { toast } from "react-toastify";

const Menu = () => {
  const { user, setUser } = useContext(UserContext);
  const { cart, setCart } = useContext(CartContext);
  const router = useRouter();

  const handleLogout = () => {
    toast.success("Thank you for shopping at ShopTech, come back soon!");
    setUser(null);
    setCart([]);
    localStorage.removeItem("user");
    localStorage.removeItem("cart");
    router.push("/");
  };

  const pathname = usePathname();

  return (
    <nav className="flex items-center justify-between">
      <ul className="flex flex-wrap justify-center space-x-4 text-primary-light text-xl">
        <li>
          <Link
            href="/"
            className={`text-primary-light hover:text-primary-dark ${
              pathname === "/" ? "!text-primary-dark font-bold" : ""
            }`}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            href="/products"
            className={`text-primary-light hover:text-primary-dark ${
              pathname === "/products" ? "!text-primary-dark font-bold" : ""
            }`}
          >
            Products
          </Link>
        </li>

        {user ? (
          <>
            <li>
              <Link
                href="/dashboard"
                className={`text-primary-light hover:text-primary-dark ${
                  pathname === "/dashboard"
                    ? "!text-primary-dark font-bold"
                    : ""
                }`}
              >
                Dashboard
              </Link>
            </li>
            <li>
              <Link
                href="/cart"
                className={`text-primary-light hover:text-primary-dark whitespace-nowrap ${
                  pathname === "/cart" ? "!text-primary-dark font-bold" : ""
                }`}
              >
                {`Cart ${cart.length > 0 ? "(" + cart.length + ")" : " "}`}
              </Link>
            </li>
            <li>
              <button onClick={handleLogout} className="text-primary-light hover:text-primary-dark">
                Log out
              </button>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link
                href="/login"
                className={`text-primary-light hover:text-primary-dark ${
                  pathname === "/login" || pathname === "/register"
                    ? "!text-primary-dark font-bold"
                    : ""
                }`}
              >
                Sing In
              </Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Menu;
