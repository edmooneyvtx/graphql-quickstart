
# GraphQL Quickstart


Breakdown:
History and about/why it matters
General concepts
Short Demo - how to get started
Other tools of interest.

### General Concepts we'll cover:
* Schema
* Subscription
* Mutations
* Queries
* Apollo


## Demos


## Backend

[https://hasura.io/](https://hasura.io/)
Just to get us moving quickly. Sets up a GraphQL endpoint on a Postgres database.

We're going to use Heroku...
Follow the instructions here (set up a Heroku account if you don't already have one):
[https://docs.hasura.io/1.0/graphql/manual/getting-started/heroku-simple.html](https://docs.hasura.io/1.0/graphql/manual/getting-started/heroku-simple.html)

Post deployment:
Example:
[https://gql-postgres.herokuapp.com/console](https://gql-postgres.herokuapp.com/console)

#### Sample Dataset:
@todo


#### Sample queries with this dataset.

@todo.

### ExpressJS

#### Using this quickstart


#### Basics

```

var  express  =  require('express');
var  app  =  express();
//adding the apolloServer
const { ApolloServer, gql } =  require('apollo-server-express');

//schema
const  typeDefs  =  gql`
type Query {
books:[Book]
book: Book
}

type Book {
title: String!
author: String!
published: Int!
}
`;

// resolvers - this is the function that says how to get the data!
const  resolvers  = {
Query: {
books: () =>  books,
book: () => {
return {
title:  'A System Of Logic',
author:  'John Stewart Mill',
published:  1876
}
}
}
}
// this is the Apollo server - passing the typeDefs (i.e. Schema, and resolvers)
const  server  =  new  ApolloServer({
typeDefs,
resolvers
});

//use the middleware to attach
server.applyMiddleware( {app} );
```


### Flask (python)

#### Using this quickstart
- docker pull the flask 

#### Basics
  
```


```
  
## General concepts

### Schema

Types (scalar):

-   ID
-   Int
-   Float
-   String
-   Boolean
    
Types can also be Objects... (Examples):

-   People
-   Car
-   Book
    
These types can have modifiers:

#### Example:

-   String = nullable string
    
-   String! = non-nullable
    
-   [String] = List of nullables
    
-   [String]! = non-nullable list of nullable strings 😊
    
-   [String!]! = non-nullable list of non-nullable strings
    

Lets Build a Schema (typeDef in Apollo Server language):

This is a __Query__...

```
/* remember - resolvers are the functions to 
   tell you how to get your data
*/
const  resolvers  = {}
gql`
	Query: {
		books: () =>  books
	}
	This is the Type...

	Type User {
	Id: ID
	Name: String!
	Email: String!
	}
`
```
## Short Demo - How to get started

* Code Sandbox: [https://codesandbox.io/s/apollo-server](https://codesandbox.io/s/apollo-server) [ build queries w/ hasura.io backend]

* [https://gql-postgres.herokuapp.com/](https://gql-postgres.herokuapp.com/)
    
* [http://localhost:3000/graphql](http://localhost:3000/graphql) (expressjs) - this is with Apollo – Graphqli

* https://developer.github.com/v4/ | https://developer.github.com/v4/explorer/ 

## Resources:

### Repos And Such

* Awesome GraphQL: https://github.com/chentsulin/awesome-graphql

* Spacecloud: https://github.com/edmooney/space-cloud
  create Graphgl resources from an existing database. Supports: Postgres, Mongo, MySQL
  
* https://github.com/apollographql/graphql-tools

* https://github.com/apollographql/graphql-playground

* AWS Amplify: https://github.com/aws-amplify/amplify-js?source=post_page-----e4b9005f6fc2----------------------#4-graphql-api-operations

* Swagger to GraphQL: https://github.com/yarax/swagger-to-graphql

* Alternatives: Vulcain (REST Push model) : https://github.com/dunglas/vulcain

* Netflix Falcor: [https://netflix.github.io/falcor/](https://netflix.github.io/falcor/)

* Expressjs w/ Hasura: https://blog.hasura.io/add-authentication-and-authorization-to-next-js-8-serverless-apps-using-jwt-and-graphql/


### Videos

* GraphQL Conf: https://www.youtube.com/watch?reload=9&v=AIMOkj1ohaU&feature=youtu.be&t=461

* GraphQL history: https://www.youtube.com/watch?v=783ccP__No8 
