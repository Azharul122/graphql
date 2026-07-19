export const typeDefs = `#graphql


  type Category {
    id: ID!
    name: String
    products: [Product]
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
  }



  type Query {
    categories: [Category]
    category(id: ID!): Category
    products: [Product],
    product(id: ID!): Product
  }

`;

export default typeDefs;
