type CategoryNames =
  | "Smartphones"
  | "Laptops"
  | "Tablets"
  | "Headphones"
  | "Cameras"
  | "Printers"
  | "Monitors"
  | "Storage"
  | "Accessories";

interface Category {
  id: number;
  name: CategoryNames;
}

const categoryNames: CategoryNames[] = [
  "Smartphones",
  "Laptops",
  "Tablets",
  "Headphones",
  "Cameras",
  "Printers",
  "Monitors",
  "Storage",
  "Accessories",
];

export const categories: Category[] = categoryNames.map((name, index) => ({
  id: index + 1,
  name,
}));
