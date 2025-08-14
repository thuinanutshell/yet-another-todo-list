import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
const typeDefs = `#graphql
  type Todo {
    id: ID!
    text: String!
    completed: Boolean!
  }

  type Query {
    todos: [Todo!]!
  }

  type Mutation {
    addTodo(text: String!): Todo!
    toggleTodo(id: ID!): Todo!
  }
`;
const resolvers = {
    Query: {
        todos: () => prisma.todo.findMany(),
    },
    Mutation: {
        addTodo: (_, { text }) => prisma.todo.create({ data: { text } }),
        toggleTodo: async (_, { id }) => {
            const todo = await prisma.todo.findUnique({ where: { id: Number(id) } });
            if (!todo)
                throw new Error('Todo not found');
            return prisma.todo.update({
                where: { id: Number(id) },
                data: { completed: !todo.completed },
            });
        },
    },
};
const server = new ApolloServer({ typeDefs, resolvers });
const start = async () => {
    const { url } = await startStandaloneServer(server, {
        listen: { port: 4000 },
    });
    console.log(`🚀 Server ready at ${url}`);
};
start();
