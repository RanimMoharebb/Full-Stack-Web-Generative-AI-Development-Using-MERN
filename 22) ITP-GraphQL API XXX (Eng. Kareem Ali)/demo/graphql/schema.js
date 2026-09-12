const { buildSchema } = require('graphql')
//! GraphQL Schema Definition Language (SDL)

//* What is SDL?

//* It’s the syntax used to describe your API structure in GraphQL:

//* Types
//* Fields
//* Queries
//* Mutations
//* Relationships between data


module.exports = buildSchema(`
      type TestData {
            text: String!
            views: Int
      }
    
      type Book {
            title: String!
            author: String!
            publishYear: Int
      }
      
      input BooksFilterInput {
            minYear: Int
            maxYear: Int
      }
      
      input CreateUserInput {
            email: String!
            password: String!
      }
      
      type User {
            _id: ID!,
            name: String!,
            email: String!,
            password: String!,
      }
      
      input CreateBookInput {
            title: String!
            author: String!
            publishYear: Int!
      }
      
      type RootMutation {
            createUser(userInput: CreateUserInput): User!
            createBook(bookInput: CreateBookInput): Book!
      }
      
      type RootQuery {
            hello: TestData
            getBooksWithFilters(filter: BooksFilterInput): [Book]
      }
      
      schema {
        query: RootQuery
        mutation: RootMutation
      }

`);