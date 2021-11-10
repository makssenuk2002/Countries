import {ApolloClient, gql, InMemoryCache} from "@apollo/client";

const LIST_COUNTRIES = gql`
 {
    continents {
      name
      countries{
        name
        languages{
          name
        }
      }
    }
  }
`;
const client = new ApolloClient({
    cache: new InMemoryCache(),
    uri: 'https://countries.trevorblades.com'
});

export {LIST_COUNTRIES , client}