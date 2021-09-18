const express = require("express");
const app = express();

const express_graphql = require("express-graphql");

app.listen(3000, () => console.log("server on port 3000"))