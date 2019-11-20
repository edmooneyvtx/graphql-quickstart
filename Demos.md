
##Demo Cut and Paste



### HASURA

#### Queries

Below are some sample queries to get you going.


#### Simple Query

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

#### Simple Query with a filter

```
query MyQuery {
  plants(where: {bestbet: {_eq: 1}}) {
    commonname
    bestbet
    adddetail
    sciname
  }
}
```


#### Mutation

Insert a new plant

```
mutation MyMutation {
  __typename
  insert_plants(objects: {adddetail: "my test", id: 70123, commonname: "mooney plant", sciname: "mooney sci"}) {
    returning {
      id
      commonname
      sciname
    }
  }
}

```



### SPACEX



### 

