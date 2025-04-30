import { getProductsByCategory } from "@/services/productService";
import { notFound } from "next/navigation";
import Landing from "@/components/Landing";
import { Product } from "@/interfaces/Product";
import Card from "@/components/Card";
import { categories } from "@/interfaces/Category";
import FeaturedProducts from "@/components/FeaturedProducts";

interface PageProps {
  params: Promise<{ id: string }>;
}

const ProductsCategory = async ({ params }: PageProps) => {
  const resolvedParams = await params;
  const { id } = resolvedParams;
  const categoryId = parseInt(id);

  const productFind = await getProductsByCategory(categoryId);

  if (!productFind) {
    return notFound();
  }

  const category = categories.find((cat) => cat.id === categoryId);

  return (
    <div>
      <Landing />
      <h1 className="text-center text-primary">
        {category ? category.name : "Category not found"}
      </h1>
      <hr />
      <br />
      {productFind.length > 0 ? (
        <div className="-m-6 pb-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {productFind.map((product: Product) => (
            <Card key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="flex justify-center flex-col items-center mt-6">
          <h2 className="text-pink-600 text-center">
            Sorry, we could not load the products. Please try again later.
          </h2>
          <br />
          <FeaturedProducts />
        </div>
      )}
    </div>
  );
};

export default ProductsCategory;
