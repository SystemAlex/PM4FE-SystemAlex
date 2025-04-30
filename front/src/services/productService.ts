import { API_URL } from "../../envs";
import { Product } from "@/interfaces/Product";

export const getProducts = async (): Promise<Product[]> => {
  const res = await fetch(`${API_URL}/products`)
    .then((res) => res.json())
    .catch(() => {
      return [];
    });
  return res as Product[];
};

export const getProductById = async (id: number): Promise<Product> => {
  const products = await getProducts();
  const productFind = products.find((product) => product.id === id);
  return productFind as Product;
};

export const getFeaturedProducts = async (): Promise<Product[]> => {
  const products = await getProducts();
  const featuredProducts = products.slice(0, 4);
  return featuredProducts as Product[];
};

export const getProductsByCategory = async (idCat: number): Promise<Product[]> => {
  const products = await getProducts();
  const productFind = products.filter((product) => product.categoryId === idCat);
  return productFind as Product[];
}