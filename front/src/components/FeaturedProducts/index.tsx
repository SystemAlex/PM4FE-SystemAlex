import { getFeaturedProducts } from "@/services/productService";
import { Product } from "@/interfaces/Product";
import Card from "../Card";

const featuredProducts = await getFeaturedProducts();

const FeaturedProducts = () => {
  return (
    <div>
      <h2 className="text-center text-primary">Featured Products</h2>
      <hr />
      <br />
      {featuredProducts.length > 0 ? (
        <div className="-m-6 pb-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {featuredProducts.map((product: Product) => (
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

export default FeaturedProducts;
