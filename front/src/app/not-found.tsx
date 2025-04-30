import FeaturedProducts from "@/components/FeaturedProducts";

const NotFound = () => {
  return (
    <div className="flex justify-center flex-col items-center h-full">
      <h1 className="text-pink-600 font-bold text-center">404 | not-found</h1>
      <br />
      <FeaturedProducts />
    </div>
  );
};

export default NotFound;
