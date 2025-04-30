import { getProductById } from "@/services/productService";
import { notFound } from "next/navigation";
import Detail from "@/components/Detail";

interface PageProps {
  params: Promise<{ id: string }>;
}

const Product = async ({ params }: PageProps) => {
  const resolvedParams = await params;
  const { id } = resolvedParams;

  const productFind = await getProductById(parseInt(id));

  if (!productFind) {
    return notFound();
  }

  return (
    <div>
      <h1 className="text-center text-primary">{productFind.name}</h1>
      <hr />
      <br />
      <Detail product={productFind} />
    </div>
  );
};

export default Product;
