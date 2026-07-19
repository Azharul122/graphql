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
};

export default resolvers;