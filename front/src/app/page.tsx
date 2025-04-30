import Image from "next/image";
import imgHome from "@/assets/img_home.jpg";
import Landing from "@/components/Landing";
import FeaturedProducts from "@/components/FeaturedProducts";

const Home = () => {
  return (
    <div className="container">
      <Landing />
      <div className="relative w-full h-[35vh] max-md:mb-5p mb-8 rounded-lg">
        <Image
          src={imgHome}
          alt="Imagen de fondo del Home"
          fill={true}
          className="-z-10 object-cover object-center rounded-lg"
        />
        <div className="absolute top-0 left-0 min-h-available p-5 text-left m-5 md:m-10">
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
          <p className="text-[30px] text-gray-700 font-bold absolute bottom-0 text-center whitespace-nowrap">
            Coming Soon...
          </p>
        </div>
      </div>
      <FeaturedProducts />
    </div>
  );
};

export default Home;
