var createError = require('http-errors');



var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

const books = require('./data').books;





var express = require('express');
var app = express();

const { ApolloServer, gql } = require('apollo-server-express');

const typeDefs = gql`
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
const resolvers = {
  Query: {
    books: () => books,
    book: () => {
      return {
        title: 'A System Of Logic',
        author: 'John Stewart Mill',
        published: 1876
      }
    }
  }
}

const server = new ApolloServer({
  typeDefs,
  resolvers
});

//use the middleware to attach
server.applyMiddleware( {app} );



//end setup - build the queries

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
