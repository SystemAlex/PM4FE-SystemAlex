"use client";
import Image from "next/image";
import { useContext } from "react";
import { useRouter, usePathname } from "next/navigation";
import { Product } from "@/interfaces/Product";
import { UserContext } from "@/context/userContext";
import { CartContext } from "@/context/cartContext";
import { toast } from "react-toastify/unstyled";

const Detail = ({ product }: { product: Product }) => {
  const { user } = useContext(UserContext);
  const { cart, setCart } = useContext(CartContext);
  const router = useRouter();
  const pathname = usePathname();

  const isInCart = cart.some((p: { id: number; }) => p.id === product.id);

  const handleBuy = () => {
    if (user) {
      if (!isInCart) {
        setCart([...cart, product]);
        router.push(`/cart`);
      } else {
        toast.error("Product is already in the cart!");
        router.back();
      }
    } else {
      router.push(`/login?redirect=${pathname}`);
    }
  };

  return (
    <div className="flex justify-center mb-8">
      <div className="flex flex-col md:flex-row items-start gap-10 max-w-5xl">
        <div className="shrink-0 w-full md:w-[380px] h-[400px]  bg-white border border-gray-200 rounded-lg flex">
          <Image
            src={product.image}
            alt={product.name}
            width={380}
            height={400}
            className="flex-grow object-contain self-center"
          />
        </div>

        <div className="flex flex-col justify-between w-full md:w-[500px]">
          <div>
            <p className="text-gray-700 text-justify leading-relaxed mb-6 mt-12">
              {product.description}
            </p>
          </div>
          <div>
            <h2 className="text-3xl font-semibold text-pink-600 mb-6">
              $
              {product.price.toLocaleString("es-AR", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
            </h2>
            <button className="button" onClick={handleBuy}>
              Buy Product
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
