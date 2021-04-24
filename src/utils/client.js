import ApolloClient from "apollo-boost"

const {
  REACT_APP_STEPZEN_API_KEY,
  REACT_APP_STEPZEN_ENDPOINT
} = process.env

console.log(`API KEY ${REACT_APP_STEPZEN_API_KEY} REACT_APP_STEPZEN_ENDPOINT ${REACT_APP_STEPZEN_ENDPOINT}`);

export const client = new ApolloClient({
  headers: {
    Authorization: `Apikey ${REACT_APP_STEPZEN_API_KEY}`,
  },
  uri: REACT_APP_STEPZEN_ENDPOINT,
})