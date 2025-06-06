"use client";
import { UserContext } from "@/context/userContext";
import Image from "next/image";
import { useContext } from "react";
import imgLanding from "@/assets/landing.png";
import Link from "next/link";

const Landing = () => {
  const { user } = useContext(UserContext);

  return !user ? (
    <div className="relative w-full h-[40vh] max-md:mb-5p mb-8 bg-primary-light/50 rounded-lg">
      <Image
        src={imgLanding}
        alt="Imagen de fondo del Landing"
        fill={true}
        className="-z-10 object-cover object-center rounded-lg"
      />
      <div className="absolute top-0 left-0 min-h-available p-5 text-left m-5 md:m-10">
        <p className="text-7xl max-md:text-4xl text-primary font-bold leading-tight">
          Sing Up Today
        </p>
        <p className="text-4xl text-right text-pink-600 font-bold">
          and Get Free Shipping
        </p>
        <small className="block text-right">ONLY THE FIRST SHIPPING</small>
        <div className="flex absolute bottom-4 left-4 right-4 justify-between items-end gap-5 max-md:flex-col max-md:gap-2">
          <p className="text-lg md:text-xl lg:text-2xl xl:text-3xl text-primary-dark">
            Shop the best of electronic, Grab the deals, offers and more.
          </p>
          <Link href="/register" className="button flex-none">
            Sing Up
          </Link>
        </div>
      </div>
    </div>
  ) : (
    <></>
  );
};

export default Landing;
