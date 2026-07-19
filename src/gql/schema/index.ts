export const typeDefs = `#graphql

  type Product {
    id: ID!
    name: String
    brand: String
    category: String
    price: Float
    stock: Int
    rating: Float
    isAvailable: Boolean
  }

  type Category {
    id: ID!
    name: String
  }

  type Query {
    categories: [Category]
    category(id: ID!): Category
    products: [Product],
    product(id: ID!): Product
  }

`;

export default typeDefs;
