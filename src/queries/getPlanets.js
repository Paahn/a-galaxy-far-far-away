import { gql } from "graphql-tag"

export const GET_PLANETS_QUERY = gql`
    query getPlanets {
        getPlanets{
            name
            diameter
            url
            climate
        }
    }
`