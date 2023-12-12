import { Flex, Grid, Spinner, Text, VStack } from '@chakra-ui/react';
import { useQuery } from '@apollo/client';
import GET_ALL_TASK from '../../graphql/querys/getAllTasks';
import TaskApiResponse from '../../interfaces/TaskApiResponse';
import ITask from '../../interfaces/ITask';
import CardItem from './Card/CardItem/CardItem';

interface TasksByStatus {
  [status: string]: ITask[];
}

function Task() {
  const { loading, data } = useQuery<TaskApiResponse>(GET_ALL_TASK);

  const tasksByStatus = data?.tasks.reduce((acc: TasksByStatus, task) => {
    const { status } = task;

    if (!acc[status]) {
      acc[status] = [];
    }

    acc[status].push(task);

    return acc;
  }, {});

  if (loading) {
    return (
      <Flex justifyContent="center">
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="blue.500"
          size="xl"
        />
      </Flex>
    );
  }

  // Array of statuses to iterate over and render columns
  const statuses = Object.keys(tasksByStatus || {});
  return (
    <Grid
      templateColumns={`repeat(${statuses.length}, 1fr)`}
      padding="30px"
      gap="20px"
      w="100%"
      overflow="auto"
    >
      {statuses &&
        statuses.map((statusName) => {
          return (
            <VStack
              spacing="20px"
              minWidth="300px"
              width="100%"
              key={statusName}
            >
              <Text
                fontSize="lg"
                color="neutral.1"
                textAlign="start"
                w="100%"
                fontWeight="bold"
              >
                {' '}
                {statusName}{' '}
                {`(${tasksByStatus && tasksByStatus[statusName].length})`}
              </Text>
              {tasksByStatus &&
                tasksByStatus[statusName].map(
                  ({ id, name, assignee, pointEstimate, tags, dueDate }) => (
                    <CardItem
                      key={id}
                      name={name}
                      assignee={assignee}
                      pointEstimate={pointEstimate}
                      tags={tags}
                      dueDate={dueDate}
                    />
                  )
                )}
            </VStack>
          );
        })}
    </Grid>
  );
}

export default Task;
