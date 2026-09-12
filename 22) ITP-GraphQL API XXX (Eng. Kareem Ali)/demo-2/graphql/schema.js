const { buildSchema } = require('graphql')
const {GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLInputObjectType, GraphQLID, GraphQLSchema, GraphQLList,
    GraphQLNonNull
} = require("graphql/type");
const resolver = require('./resolver');
//! GraphQL Schema Definition Language (SDL)

//* What is SDL?

//* It’s the syntax used to describe your API structure in GraphQL:

//* Types
//* Fields
//* Queries
//* Mutations
//* Relationships between data

const TestData = new GraphQLObjectType({
    name: 'TestData',
    fields: () => ({
        text: { type: GraphQLString },
        views: { type: GraphQLInt }
    })
})

const Book = new GraphQLObjectType({
    name: 'Book',
    fields: () => ({
        title: { type: GraphQLString },
        author: { type: GraphQLString },
        publishYear: { type: GraphQLInt }
    })
})

const BooksFilterInput = new GraphQLInputObjectType({
    name: 'BooksFilterInput',
    fields: () => ({
        minYear: { type: GraphQLInt },
        maxYear: { type: GraphQLInt },
    })
})

const CreateUserInput = new GraphQLInputObjectType({
    name: 'CreateUserInput',
    fields: () => ({
        email: { type: GraphQLString },
        password: { type: GraphQLString },
    })
})

const User = new GraphQLObjectType({
    name: 'User',
    fields: () => ({
        _id: { type: GraphQLID },
        name: { type: GraphQLString },
        email: { type: GraphQLString },
        password: { type: GraphQLString },
    })
})

const CreateBookInput = new GraphQLInputObjectType({
    name: 'CreateBookInput',
    fields: () => ({
        title: { type: GraphQLString },
        author: { type: GraphQLString },
        publishYear: { type: GraphQLInt }
    })
})

const RootQuery = new GraphQLObjectType({
    name: 'RootQuery',
    fields: () => ({
        hello: {
            type: TestData,
            resolve() {
                resolver.hello()
            }
        },
        getBooksWithFilters: {   //! [Book]
            type: new GraphQLList(Book),
            args: {
                filter: { type: BooksFilterInput }
            },
            async resolve(_, { filter }) {
                await resolver.getBooksWithFilters({ filter })
            }
        }
    })
})

const RootMutation = new GraphQLObjectType({
    name: 'RootMutation',
    fields: () => ({
        createUser: {
            type: User,
            args: {
                userInput: {type: new GraphQLNonNull(CreateUserInput)}
            },
            resolve(_, { userInput }) {
                return {
                    _id: "12345",
                    name: "Mazen",
                    email: userInput.email,
                    password: userInput.password,
                }
            }
        },
        createBook: {
            type: Book,
            args: {
                bookInput: { type: new GraphQLNonNull(CreateBookInput)}
            },
            resolve(_, { bookInput }) {
                const { title, author, publishYear } = bookInput;

                // save in database
                const customError = new Error("Error validation the book schema")
                customError.code = 400
                customError.data = {
                    message: "Validating inputs schema failed"
                }
                throw customError;

                return {
                    title,
                    author,
                    publishYear
                }
            }
        }
    })
})

module.exports = new GraphQLSchema({
    query: RootQuery,
    mutation: RootMutation
})



