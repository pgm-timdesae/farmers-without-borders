/**
 * All Category related GraphQL stuff
 */

import { gql } from "@apollo/client";
// import { gql } from "graphql-tag";

/**
 * Queries
 */

export const GET_ALL_CATEGORIES = gql`
  query Categories {
    categories {
      id
      name
      description
      image
    }
  }
`;

export const GET_CATEGORY = gql`
  query Category($id: Int!) {
    getCategory(id: $id) {
      id
      name
    }
  }
`;

export const GET_CATEGORY_PRODUCTS = gql`
  query Category($id: Int!) {
    getCategory(id: $id) {
      name
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
  }
`;

export const GET_ACCOUNT_PASSWORD = gql`
  query GetAccountPassword($id: ID!) {
    account(where: { id: $id }) {
      password
    }
  }
`;
