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



  type User{
    id: ID!
    name: String!
    email: String!
    password: String!
    profile: Profile!
    posts: [Post]
    createdAt: String!
    updatedAt: String
  }

  type Profile{
    id: ID!
    bio: String
    userId: ID!
    user: User
    createdAt: String!
    updatedAt: String
  }

  type Post{
    id: ID!
    title: String!
    content: String!
    published: Boolean
    author: User!
    authorId: ID!
    createdAt: String!
    updatedAt: String
  }

`;

export default typeDefs;
