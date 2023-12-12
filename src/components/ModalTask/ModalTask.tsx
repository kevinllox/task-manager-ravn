/* eslint-disable import/no-extraneous-dependencies */
import { useState } from 'react';
import { useMutation, useQuery } from '@apollo/client';
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
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ChevronDownIcon } from '@chakra-ui/icons';
import IUserApiResponse from '../../interfaces/IUserApiResponse';
import GET_ALL_USERS from '../../graphql/querys/getAllUsers';
import CREATE_TASK from '../../graphql/mutations/addTasks';
import TaskAPiResponse from '../../interfaces/TaskApiResponse';
import GET_ALL_TASK from '../../graphql/querys/getAllTasks';
import { DEFAULT_TAGS } from '../../constants/consts';

function ModalTask({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const [taskTitle, setTaskTitle] = useState('');
  const [estimate, setEstimate] = useState('');
  const [assigneeId, setAssigneeId] = useState('');
  const [date, setDate] = useState('');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const { data } = useQuery<IUserApiResponse>(GET_ALL_USERS);
  const { refetch: refetchTasks } = useQuery<TaskAPiResponse[]>(GET_ALL_TASK);
  const [createTask, { loading }] = useMutation(CREATE_TASK, {
    onCompleted: async () => {
      try {
        await refetchTasks();
        toast.success('Task created successfully');
      } catch (error) {
        toast.error(`Error refetching: ${error}`);
      }
    },
    onError: (error) => {
      toast.error(`Error creating task: ${error.message}`);
    },
  });

  const handleUpdateTask = () => {
    if (
      taskTitle.trim() === '' ||
      estimate.trim() === '' ||
      assigneeId.trim() === '' ||
      date.trim() === '' ||
      selectedTags.length < 0
    ) {
      toast.error('You need to fill up the form!');
    }
    createTask({
      variables: {
        input: {
          assigneeId,
          dueDate: new Date(date).toISOString(),
          name: taskTitle,
          pointEstimate: estimate,
          status: 'TODO',
          tags: [...selectedTags],
        },
      },
    });
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
              onChange={(e) => setEstimate(e.target.value)}
            >
              <option value="ZERO">0</option>
              <option value="ONE">1</option>
              <option value="TWO">2</option>
              <option value="FOUR">4</option>
              <option value="EIGHT">8</option>
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
              onChange={(e) => setAssigneeId(e.target.value)}
            >
              {data?.users.map(({ id, fullName }) => (
                <option value={id} key={id}>
                  {fullName}
                </option>
              ))}
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
                {DEFAULT_TAGS.map((tag) => (
                  <MenuItem key={tag}>
                    <Checkbox
                      isChecked={selectedTags.includes(tag)}
                      onChange={() => {
                        const newSelectedTags = selectedTags.includes(tag)
                          ? selectedTags.filter((t) => t !== tag)
                          : [...selectedTags, tag];
                        setSelectedTags(newSelectedTags);
                      }}
                    >
                      {tag}
                    </Checkbox>
                  </MenuItem>
                ))}
              </MenuList>
            </Menu>

            <Input
              fontSize="14px"
              type="date"
              placeholder="Select a date"
              onChange={(e) => setDate(e.target.value)}
            />
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
            isLoading={loading}
          >
            Create
          </Button>
        </ModalFooter>
      </ModalContent>
      <ToastContainer />
    </Modal>
  );
}

export default ModalTask;
