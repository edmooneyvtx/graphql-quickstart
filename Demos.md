
##Demo Cut and Paste



### HASURA

#### Queries


Simple Query

```
query MyQuery {
  plants {
    commonname
    bestbet
    adddetail
    sciname
  }
}
```

Simple Query with a filter

```
query MyQuery {
  plants(where: {bestbet: {_eq: 1}}) {
    commonname
    bestbet
    adddetail
    sciname
  }
}



#### Mutation

```
mutation MyMutation {
  __typename
  delete_plants(where: {}) {
    returning {
      id
    }
  }
}
```


### SPACEX



### 

