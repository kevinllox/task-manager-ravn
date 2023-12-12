import { gql } from '@apollo/client';

const GET_PROFILE = gql`
  query getProfile {
    profile {
      avatar
      createdAt
      updatedAt
      email
      id
      fullName
      type
    }
  }
`;
export default GET_PROFILE;
