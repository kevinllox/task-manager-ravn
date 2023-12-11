import { Box, useDisclosure } from '@chakra-ui/react';

import SearchBar from '../../components/SearchBar/SearchBar';
import Task from '../../components/Task/Task';
import ButtonsContainer from '../../components/ButtonsContainer/ButtonsContainer';
import ModalTask from '../../components/ModalTask/ModalTask';

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
