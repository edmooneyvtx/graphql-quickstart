
## Demo Cut and Paste



### HASURA

Heroku Deployment (this can also be deployed with a docker container)

https://gql-postgres.herokuapp.com/console

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

https://api.spacex.land/graphql/



#### Security

```
{
  launchesPast(limit: 10) {
    mission_name
    launch_date_local
    launch_site {
      site_name_long
    }
    links {
      article_link
      video_link
    }
    rocket {
      rocket_name
      first_stage {
        cores {
          flight
          core {
            reuse_count
            status
          }
        }
      }
      second_stage {
        payloads {
          payload_type
          payload_mass_kg
          payload_mass_lbs
        }
      }
    }
    ships {
      name
      home_port
      image
      roles
      speed_kn
      status
    }
  }
}

```

### GitHub Queries

```
query { 
  user(login:"edmooney") { 
    bio
		bioHTML
    id
    databaseId
    name
    company
    createdAt
    location
    email
    followers(first:1){
			totalCount
    }
    }
```
    
  
  And another...
  
 let's get a repo where the owner is vertexinc and the name is

```
 query {
  repository(owner:"vertexinc", name:"labs-sherlock-ui") {
    issues(last:20, states:OPEN) {
      edges {
        node {
          title
          url
          state
          labels(first:5) {
            edges {
              node {
                name
              }
            }
          }
        }
      }
    }
  }
}
```


