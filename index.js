const express = require("express");
const app = express();

const express_graphql = require("express-graphql");
const{ buildSchema } = require("graphql");

const schema = buildSchema("
    type Query {
        message: string
    }
");

const root = {
    message: () => "hello world"
}

app.use("/graphql", express_graphql({
    shema: schema,
    root: root, 
    graphiql:  true
}));

app.listen(3000, () => console.log("server on port 3000"))