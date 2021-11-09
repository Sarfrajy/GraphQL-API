const express = require('express');
const {graphqlHTTP} = require('express-graphql');
const schema = require('./schema')

const app= express();
console.log(app)
app.use(express.json())
app.use('/graphql', graphqlHTTP({
    schema,
    graphiql:true
}));

app.listen(2020,()=>{
    console.log('server is running on PORT :2020')
});