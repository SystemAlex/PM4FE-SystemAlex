import { IProduct } from "@/interfaces/IProduct";
import { getProducts } from "@/services/productService";
import Card from "@/components/Card";
import Landing from "@/components/Landing";
import Image from "next/image";
import imgHome from "@/assets/img_home.jpg";

const Products = async () => {
  const productsFound: IProduct[] = await getProducts();

  return (
    <div>
      <Landing />
      <h1 className="text-center text-primary">Products</h1>
      <hr />
      <br />
      {productsFound.length > 0 ? (
        <div className="-m-6 pb-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <div className="p-6 sm:col-span-2">
            <div className="relative h-full w-full rounded-lg overflow-hidden">
              <Image src={imgHome} fill={true} alt="" className="object-cover -z-10"/>
              <div className="flex flex-col justify-between p-4 border border-gray-200 rounded-lg text-primary-dark h-full">
                <div>
                  <p className="font-semibold mb-2">AirPods Max</p>
                  <p className="font-semibold mb-2">Coming Soon...</p>
                </div>
                <div className="flex justify-between items-center">
                  <p className="lg:text-responsive md:text-responsive sm:text-responsive text-responsive text-pink-600 font-bold">
                    40% Discount
                  </p>
                  <p className="font-semibold text-primary lg:text-responsive md:text-responsive sm:text-responsive text-responsive">
                    $ 120.36
                  </p>
                </div>
              </div>
            </div>
          </div>
          {productsFound.map((product: IProduct) => (
            <Card key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="wrapper flex justify-center items-center mt-6">
          <h2 className="text-pink-600 text-center">
            Sorry, we could not load the products. Please try again later.
          </h2>
        </div>
      )}
    </div>
  );
};

export default Products;
