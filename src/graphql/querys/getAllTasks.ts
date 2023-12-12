import { gql } from '@apollo/client';

const GET_ALL_TASK = gql`
  query getTask {
    tasks(input: {}) {
      name
      id
      dueDate
      name
      pointEstimate
      status
      tags
      assignee {
        id
        fullName
        avatar
      }
    }
  }
`;
export default GET_ALL_TASK;
