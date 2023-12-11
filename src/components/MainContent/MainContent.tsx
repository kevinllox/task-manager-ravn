import { Box, useDisclosure } from '@chakra-ui/react';

import SearchBar from '../SearchBar/SearchBar';
import Task from '../Task/Task';
import ButtonsContainer from '../ButtonsContainer/ButtonsContainer';
import ModalTask from '../ModalTask/ModalTask';

function MainContent() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box flex="1" overflow="auto">
      <SearchBar />
      <ButtonsContainer onOpen={onOpen} />
      <Task />
      <ModalTask isOpen={isOpen} onClose={onClose} />
    </Box>
  );
}

export default MainContent;
