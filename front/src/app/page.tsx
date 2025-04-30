import Image from "next/image";
import { IProduct } from "../interfaces/IProduct";
import { getFeaturedProducts } from "@/services/productService";
import Card from "@/components/Card/index";
import imgHome from "@/assets/img_home.jpg";
import Landing from "@/components/Landing";

const featuredProducts = await getFeaturedProducts();

const Home = () => {
  return (
    <div className="container">
      <Landing />
      <div className="relative w-full h-[65vh] max-md:mb-5p mb-8 rounded-lg">
        <Image
          src={imgHome}
          alt="Imagen de fondo del Home"
          fill={true}
          className="-z-10 object-cover object-center rounded-lg"
        />
        <div className="absolute top-0 left-0 min-h-available p-5 text-left m-10">
          <p className="text-2xl  text-pink-600 font-bold">40% Discount</p>
          <p className="text-6xl max-md:text-3xl text-primary-dark text-center font-bold leading-tight mb-10">
            AirPods Max
          </p>
          <p className="text-[30px] text-gray-700 text-center">
            From{" "}
            <span className="text-[30px] text-primary font-semibold text-center">
              $ 120.36
            </span>
          </p>
          <p className="text-[30px] text-gray-700 font-bold absolute bottom-4 text-center whitespace-nowrap">
            Coming Soon...
          </p>
        </div>
      </div>
      <h2 className="text-center text-primary">Featured Products</h2>
      <hr />
      <br />
      {featuredProducts.length > 0 ? (
        <div className="-m-6 pb-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {featuredProducts.map((product: IProduct) => (
            <Card key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="flex justify-center items-center mt-6">
          <h2 className="text-pink-600 text-center">
            Sorry, we could not load the products. Please try again later.
          </h2>
        </div>
      )}
    </div>
  );
};

export default Home;
