/* eslint-disable react/no-array-index-key */
import {
  Card,
  Flex,
  IconButton,
  Box,
  Avatar,
  Text,
  CardHeader,
  MenuItem,
  MenuList,
  Menu,
  MenuButton,
  CardFooter,
  CardBody,
  Image,
  HStack,
  Icon,
} from '@chakra-ui/react';
import {
  HiEllipsisHorizontal,
  HiOutlineBell,
  HiPencil,
  HiTrash,
} from 'react-icons/hi2';
import clipImage from '../../../../assets/icon-card-1.svg';
import graphImage from '../../../../assets/icon-card-2.svg';
import commentImage from '../../../../assets/icon-card-3.svg';
import profilePic from '../../../../assets/profile-pic.jpg';
import ITask from '../../../../interfaces/ITask';
import { POINT_ESTIMATE, TAGS } from '../../../../constants/consts';
import getDifferenceInDays from '../../../../utils/getDifferenceInDays';

function CardItem({
  name,
  pointEstimate,
  assignee,
  tags,
  dueDate,
}: Pick<ITask, 'name' | 'assignee' | 'pointEstimate' | 'tags' | 'dueDate'>) {
  const { color, day, bg } = getDifferenceInDays(dueDate);

  return (
    <Card w="100%" bg="neutral.4" color="neutral.1">
      <CardHeader padding="0.3em 1.25rem">
        <Flex justifyContent="space-between" alignItems="center">
          <Text fontSize="lg" fontWeight="bold">
            {' '}
            {name}
          </Text>
          <Menu placement="bottom-end">
            <MenuButton
              as={IconButton}
              variant="ghost"
              colorScheme="white"
              aria-label="See menu"
              icon={<HiEllipsisHorizontal size="20px" />}
            />
            <MenuList
              minW="100px"
              maxW="200px"
              bg="neutral.3"
              color="neutral.1"
            >
              <MenuItem
                bg="transparent"
                gap="10px"
                _hover={{ backgroundColor: 'neutral.2' }}
              >
                <HiPencil />
                <Text> Edit</Text>
              </MenuItem>
              <MenuItem
                bg="transparent"
                gap="10px"
                _hover={{ backgroundColor: 'neutral.2' }}
              >
                <HiTrash />
                <Text> Delete</Text>
              </MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      </CardHeader>
      <CardBody padding="0.3rem 1.25rem">
        <Flex gap="4" justifyContent="space-between" alignItems="center">
          <Text fontSize="md"> {POINT_ESTIMATE[pointEstimate]} points</Text>
          <Flex
            alignItems="center"
            justifyContent="space-between"
            padding="5px 15px"
            bg={bg}
            borderRadius="sm"
            gap="8px"
          >
            <Icon as={HiOutlineBell} color={color} />
            <Text color={color} fontWeight="bold" fontSize="15px">
              {day}
            </Text>
          </Flex>
        </Flex>
        <Flex gap="8px" flexWrap="wrap" alignItems="center" mt="5">
          {tags.map((tagName, key) => {
            return (
              <Box
                key={key}
                padding="5px 15px"
                bg={`${TAGS[tagName]}.800`}
                borderRadius="md
        "
              >
                <Text color={`${TAGS[tagName]}.200`} fontWeight="bold">
                  {tagName}
                </Text>
              </Box>
            );
          })}
        </Flex>
      </CardBody>
      <CardFooter>
        <Flex justifyContent="space-between" w="100%">
          <Avatar
            name={assignee.fullName}
            src={assignee.avatar || profilePic}
            size="sm"
          />
          <Flex gap="10px">
            <HStack>
              <Image src={clipImage} alt="Clip" />
            </HStack>
            <HStack>
              <Text>5</Text>
              <Image src={graphImage} alt="Graph" />
            </HStack>
            <HStack>
              <Text>3</Text>
              <Image src={commentImage} alt="Commet" />
            </HStack>
          </Flex>
        </Flex>
      </CardFooter>
    </Card>
  );
}

export default CardItem;
