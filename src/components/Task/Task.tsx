import { Grid } from '@chakra-ui/react';
import CardTask from './Card/CardTask';

function Task() {
  return (
    <Grid
      templateColumns="repeat(3, 1fr)"
      padding="30px"
      gap="20px"
      w="100%"
      overflow="auto"
    >
      {/* Working Task */}
      <CardTask typeTask="Working" />
      {/*  In Progress Task */}
      <CardTask typeTask="In Progress" />
      {/* Done Tasks */}
      <CardTask typeTask="Done" />
    </Grid>
  );
}

export default Task;
