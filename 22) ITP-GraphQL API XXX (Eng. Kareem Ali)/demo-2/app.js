const express = require('express')
const { createHandler } = require('graphql-http/lib/use/express');

const graphqlSchema = require('./graphql/schema');

const app = express();

app.all('/graphql', createHandler({
    schema: graphqlSchema,
    formatError: (err) => {
        if(err.originalError) {
            const code = err.originalError.code;
            const data = err.originalError.data;
            return {
                code,
                data
            }
        }
        return err;
    }
}));

app.get('/', (req, res) => {
    res.send("Welcome to my api")
})

app.listen(3000, () => console.log("Server started on port 3000"));