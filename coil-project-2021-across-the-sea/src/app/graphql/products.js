/**
 * All Product related GraphQL stuff
 */

import { gql } from "@apollo/client";

/**
 * Queries
 */
export const GET_ALL_PRODUCTS = gql`
  query {
    products {
      id
      name
      description
      image
      price
      farmer {
        id
        company
      }
    }
  }
`;

export const GET_PRODUCT = gql`
  query ($id: Int!) {
    getProduct(id: $id) {
      id
      name
      description
      image
      price
      farmer {
        id
        firstName
        lastName
      }
    }
  }
`;

export const GET_SEARCHED_PRODUCTS = gql`
  query ($searchQuery: String!) {
    getSpecificProducts(name: $searchQuery) {
      id
      name
      description
      price
      image
      farmer {
        id
        company
      }
    }
  }
`;
