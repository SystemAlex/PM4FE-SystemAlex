import { Product } from "@/interfaces/Product";
import { getProducts } from "@/services/productService";

const ProductName = async () => {
  const products: Product[] = await getProducts();

  return (
/*     <div className="flex flex-col gap-5 p-5">
      {products
        .filter((product) => product.id === 1)
        .map((product) => (
          <h1 className="text-2xl font-bold">{product.name}</h1>
        ))}
    </div> */
    <div>
        {products[0].name}
    </div>
  );
};

export default ProductName;
