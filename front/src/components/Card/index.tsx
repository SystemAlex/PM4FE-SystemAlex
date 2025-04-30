"use client";
import Link from "next/link";
import Image from "next/image";
import { useContext } from "react";
import { useRouter, usePathname } from "next/navigation";
import { Product } from "@/interfaces/Product";
import { UserContext } from "@/context/userContext";
import { CartContext } from "@/context/cartContext";
import { toast } from "react-toastify";

const Card = ({ product }: { product: Product }) => {
  const { user } = useContext(UserContext);
  const { cart, setCart } = useContext(CartContext);
  const router = useRouter();
  const pathname = usePathname();

  const isInCart = cart.some((p: { id: number; }) => p.id === product.id);

  const handleBuy = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();

    if (user) {
      if (!isInCart) {
        setCart([...cart, product]);
        toast.success("Added to cart!");
      } else {
        toast.error("Product is already in the cart!");
      }
    } else {
      router.push(`/login?redirect=${pathname}`);
    }
  };

  return (
    <Link className="p-6" href={`products/${product.id}`}>
      <div className="p-4 bg-white border border-gray-200 rounded-lg text-primary-dark hover:shadow-lg h-full flex flex-col hover:scale-110 transition-transform duration-300">
        <p className="font-semibold mb-2">{product.name}</p>
        <Image
          src={product.image}
          alt={product.name}
          width={380}
          height={380}
          className="flex-grow object-contain self-center"
        />
        <div className="flex justify-between items-center mt-2">
          <p className="font-semibold text-primary lg:text-responsive md:text-responsive sm:text-responsive text-responsive">
            ${product.price.toLocaleString("es-AR", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
          </p>
          <button className="button" onClick={(e) => handleBuy(e)}>
            Buy
          </button>
        </div>
      </div>
    </Link>
  );
};

export default Card;
