import { useState } from 'react';
import {
  Modal,
  Button,
  ModalBody,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalFooter,
  Flex,
  Select,
  Input,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Checkbox,
} from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';

function ModalTask({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const [taskTitle, setTaskTitle] = useState('');

  const handleUpdateTask = () => {
    onClose();
  };
  return (
    <Modal
      closeOnOverlayClick={false}
      isOpen={isOpen}
      onClose={onClose}
      motionPreset="slideInTop"
      isCentered
      size="xl"
    >
      <ModalOverlay />
      <ModalContent bg="neutral.4" color="white">
        <ModalCloseButton color="white" />
        <ModalBody pb={6}>
          <Input
            w="90%"
            color="neutral.1"
            border="none"
            fontSize="20px"
            placeholder="Task Title"
            _placeholder={{ opacity: 1, color: 'gray.500', fontWeight: 'bold' }}
            value={taskTitle}
            variant="unstyled"
            onChange={(e) => setTaskTitle(e.target.value)}
          />
          <Flex mt="5" gap="10px">
            <Select
              placeholder="Estimate"
              fontSize="14px"
              sx={{
                '> option': {
                  background: 'neutral.3',
                  color: 'white',
                },
              }}
            >
              <option value="option1">0</option>
              <option value="option2">1</option>
              <option value="option3">2</option>
              <option value="option1">4</option>
              <option value="option2">8</option>
            </Select>
            <Select
              fontSize="14px"
              placeholder="Assignee"
              sx={{
                '> option': {
                  background: 'neutral.3',
                  color: 'white',
                },
              }}
            >
              <option value="option1">Grace Stone</option>
              <option value="option2">Jhon Doe</option>
              <option value="option3">Romeo Barnes</option>
              <option value="option1">Kevin Grande</option>
            </Select>
            <Menu>
              <MenuButton
                as={Button}
                border="1px solid white"
                _hover={{ backgroundColor: 'transparent' }}
                _active={{ backgroundColor: 'transparent' }}
                w="100%"
                bg="primary.500"
                color="white"
                borderRadius="md"
                fontSize="14px"
                rightIcon={<ChevronDownIcon />}
              >
                Labels
              </MenuButton>
              <MenuList
                bg="neutral.3"
                sx={{ '> button': { backgroundColor: 'transparent' } }}
              >
                <MenuItem>
                  <Checkbox>Option 1</Checkbox>
                </MenuItem>
                <MenuItem>
                  <Checkbox>Option 2</Checkbox>
                </MenuItem>
                <MenuItem>
                  <Checkbox>Option 3</Checkbox>
                </MenuItem>
              </MenuList>
            </Menu>

            <Input fontSize="14px" type="date" placeholder="Select a date" />
          </Flex>
        </ModalBody>

        <ModalFooter>
          <Button
            onClick={onClose}
            mr={3}
            _hover={{ backgroundColor: 'transparent' }}
            colorScheme="transparent"
          >
            Cancel
          </Button>
          <Button
            bg="primary.4"
            color="white"
            _hover={{ backgroundColor: 'primary.3' }}
            onClick={handleUpdateTask}
          >
            Create
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

export default ModalTask;
