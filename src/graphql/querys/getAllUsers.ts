import { gql } from '@apollo/client';

const GET_ALL_USERS = gql`
  query getUsers {
    users {
      id
      fullName
      email
      createdAt
    }
  }
`;
export default GET_ALL_USERS;
