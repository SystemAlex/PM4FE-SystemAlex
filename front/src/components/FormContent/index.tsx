import Image from "next/image";
import imgShop from "@/assets/shop.jpg";
import React from "react";

interface FormProps {
  title: string;
  formComponent: React.ReactNode;
}

const FormContent: React.FC<FormProps> = ({ title, formComponent }) => {
  const texto = title;
  const partes = texto.match(/[A-Z][a-z]*/g) || [];

  return (
    <div className="flex items-center justify-center h-full -mt-4">
      <div className="flex items-center justify-center bg-white rounded-lg shadow-lg min-h-[460] overflow-hidden">
        <div className="h-full w-[260] relative min-h-inherit max-sm:hidden">
          <Image src={imgShop} fill={true} alt="" className="object-cover" />
          <div className="relative p-4 min-h-inherit">
            <div>
              <span className="text-primary font-bold">Shop</span>
              <span className="text-primary-dark">Tech</span>
            </div>
            <div>
              <h2 className="!text-left inline text-primary !font-bold">
                {partes[0]}
              </h2>
              <h2 className="!text-left inline text-primary-dark">
                {partes[1]}
              </h2>
            </div>
            <small className="text-primary-dark absolute bottom-4 left-4 right-20">
              Shop the best of electronic, Grab the deals, offers and more.
            </small>
          </div>
        </div>
        <div className="flex flex-col items-center min-h-inherit overflow-auto">
          <div className="p-2 sm:hidden self-start">
            <div>
              <span className="text-primary font-bold">Shop</span>
              <span className="text-primary-dark">Tech</span>
            </div>
            <div>
              <h2 className="!text-left inline text-primary !font-bold">
                {partes[0]}
              </h2>
              <h2 className="!text-left inline text-primary-dark">
                {partes[1]}
              </h2>
            </div>
          </div>
          {formComponent}
        </div>
      </div>
    </div>
  );
};

export default FormContent;
