// mutations.js
import { gql } from '@apollo/client';

const CREATE_TASK = gql`
  mutation CreateTask($input: CreateTaskInput!) {
    createTask(input: $input) {
      id
      name
      pointEstimate
      dueDate
      status
      tags
    }
  }
`;

export default CREATE_TASK;
