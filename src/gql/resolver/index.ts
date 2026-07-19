import products, { categoryList } from "../../db.js";

export const resolvers = {
  Query: {
    products: () => products,

    product: (_: any, { id }: { id: string }) =>
      products.find((product) => product.id.toString() === id),

    categories: () => categoryList,

    category: (_: any, { id }: { id: string }) =>
      categoryList.find((category) => category.id.toString() === id),
  },
  Product: {
    category: (parent: any) =>
      categoryList.find((category) => category.id === parent.categoryId),
  },
  Category: {
    products: (parent: any) =>
      products.filter((product) => product.categoryId === parent.id),
  },
};

export default resolvers;
