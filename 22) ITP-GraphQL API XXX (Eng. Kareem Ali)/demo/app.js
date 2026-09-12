const express = require('express')
const { graphqlHTTP } = require('express-graphql')

const graphqlSchema = require('./graphql/schema');
const graphqlResolver = require('./graphql/resolver');

const app = express();

app.use('/graphql', graphqlHTTP({
    schema: graphqlSchema,
    rootValue: graphqlResolver,
    graphiql: true
}))

app.get('/', (req, res) => {
    res.send("Welcome to my api")
})

app.listen(3000, () => console.log("Server started on port 3000"));