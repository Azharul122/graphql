import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import products from './db.js';


const typeDefs = `#graphql

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

  type Query {
    products: [Product]
  }

`;

const resolvers = {
  Query: {
    products: () => products,
  },
};


const server = new ApolloServer({
  typeDefs,
  resolvers,
});


const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
});

console.log(`🚀  Server ready at: ${url}`);