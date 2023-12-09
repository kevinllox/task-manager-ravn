import { Container, Flex, HStack, IconButton, Button } from '@chakra-ui/react';
import { HiMiniSquares2X2, HiBars3, HiPlus } from 'react-icons/hi2';

import SearchBar from '../SearchBar/SearchBar';
import Task from '../Task/Task';

function MainContent() {
  return (
    <Container maxW="100%" overflow="auto">
      <SearchBar />
      <Flex
        alignItems="center"
        justifyContent="space-between"
        paddingTop="20px"
      >
        <HStack>
          <IconButton
            aria-label="Search"
            icon={<HiBars3 size="25px" />}
            colorScheme="neutral"
          />
          <IconButton
            aria-label="Search"
            icon={<HiMiniSquares2X2 size="25px" />}
            colorScheme="neutral"
          />
        </HStack>
        <Button
          bg="primary.4"
          color="neutral.1"
          padding="0px"
          size="sm"
          _hover={{ backgroundColor: 'primary.4' }}
        >
          <HiPlus size="20px" />
        </Button>
      </Flex>

      <Task />
    </Container>
  );
}

export default MainContent;
