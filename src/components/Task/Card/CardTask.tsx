import { VStack, Text } from '@chakra-ui/react';
import CardItem from './CardItem/CardItem';

function CardTask({ typeTask }: { typeTask: string }) {
  return (
    <VStack spacing="20px" minWidth="300px" width="100%">
      <Text
        fontSize="lg"
        color="neutral.1"
        textAlign="start"
        w="100%"
        fontWeight="bold"
      >
        {' '}
        {typeTask}
      </Text>
      <CardItem />
    </VStack>
  );
}

export default CardTask;
