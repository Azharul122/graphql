export const typeDefs = `#graphql


  type Category {
    id: ID!
    name: String
    products: [Product]
  }

  type Review {
    id: ID!
    productId: ID!
    rating: Float
    comment: String
    product: Product
  }

  type Product {
    id: ID!
    name: String
    brand: String
    category: Category
    price: Float
    stock: Int
    rating: Float
    isAvailable: Boolean
    reviews: [Review]
  }





  type Query {
    categories: [Category]
    category(id: ID!): Category
    products: [Product],
    product(id: ID!): Product
  }

`;

export default typeDefs;
