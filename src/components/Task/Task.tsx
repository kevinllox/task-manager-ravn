import {
  Grid,
  Card,
  VStack,
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
} from '@chakra-ui/react';
import {
  HiEllipsisHorizontal,
  HiOutlineBellAlert,
  HiPencil,
  HiTrash,
} from 'react-icons/hi2';
import clipImage from '../../assets/icon-card-1.svg';
import graphImage from '../../assets/icon-card-2.svg';
import commentImage from '../../assets/icon-card-3.svg';

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
      <VStack spacing="20px" minWidth="300px" width="100%">
        <Text
          fontSize="lg"
          color="neutral.1"
          textAlign="start"
          w="100%"
          fontWeight="bold"
        >
          {' '}
          Working (03)
        </Text>
        <Card w="100%" bg="neutral.4" color="neutral.1">
          <CardHeader padding="0.3em 1.25rem">
            <Flex justifyContent="space-between" alignItems="center">
              <Text fontSize="lg" fontWeight="bold">
                {' '}
                Slack{' '}
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
              <Text fontSize="md"> 4 points </Text>
              <Flex
                alignItems="center"
                justifyContent="space-between"
                padding="3px 15px"
                bg="neutral.3"
                borderRadius="sm"
                gap="8px"
              >
                <HiOutlineBellAlert />
                <Text>TODAY</Text>
              </Flex>
            </Flex>
            <Flex gap="8px" flexWrap="wrap" alignItems="center" mt="5">
              <Box
                padding="5px 15px"
                bg="green.800"
                borderRadius="md
                "
              >
                <Text color="green.200" fontWeight="bold">
                  ANDROID
                </Text>
              </Box>
              <Box
                padding="5px"
                bg="yellow.800"
                borderRadius="md
            
                "
              >
                <Text color="yellow.200" fontWeight="bold">
                  NODE
                </Text>
              </Box>
            </Flex>
          </CardBody>
          <CardFooter>
            <Flex justifyContent="space-between" w="100%">
              <Avatar
                name="Segun Adebayo"
                src="https://bit.ly/sage-adebayo"
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
      </VStack>
      {/*  In Progress Task */}
      <VStack spacing="20px" minWidth="300px" width="100%">
        <Text
          fontSize="lg"
          color="neutral.1"
          textAlign="start"
          w="100%"
          fontWeight="bold"
        >
          {' '}
          In Progress (03)
        </Text>
        <Card w="100%" bg="neutral.4" color="neutral.1">
          <CardHeader padding="0.3em 1.25rem">
            <Flex justifyContent="space-between" alignItems="center">
              <Text fontSize="lg" fontWeight="bold">
                {' '}
                Slack{' '}
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
              <Text fontSize="md"> 4 points </Text>
              <Flex
                alignItems="center"
                justifyContent="space-between"
                padding="3px 15px"
                bg="neutral.3"
                borderRadius="sm"
                gap="8px"
              >
                <HiOutlineBellAlert />
                <Text>TODAY</Text>
              </Flex>
            </Flex>
            <Flex gap="8px" flexWrap="wrap" alignItems="center" mt="5">
              <Box
                padding="5px 15px"
                bg="green.800"
                borderRadius="md
                "
              >
                <Text color="green.200" fontWeight="bold">
                  ANDROID
                </Text>
              </Box>
              <Box
                padding="5px"
                bg="yellow.800"
                borderRadius="md
            
                "
              >
                <Text color="yellow.200" fontWeight="bold">
                  NODE
                </Text>
              </Box>
            </Flex>
          </CardBody>
          <CardFooter>
            <Flex justifyContent="space-between" w="100%">
              <Avatar
                name="Segun Adebayo"
                src="https://bit.ly/sage-adebayo"
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
      </VStack>
      {/* Done Tasks */}
      <VStack spacing="20px" minWidth="300px" width="100%">
        <Text
          fontSize="lg"
          color="neutral.1"
          textAlign="start"
          w="100%"
          fontWeight="bold"
        >
          {' '}
          Done (03)
        </Text>
        <Card w="100%" bg="neutral.4" color="neutral.1">
          <CardHeader padding="0.3em 1.25rem">
            <Flex justifyContent="space-between" alignItems="center">
              <Text fontSize="lg" fontWeight="bold">
                {' '}
                Slack{' '}
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
              <Text fontSize="md"> 4 points </Text>
              <Flex
                alignItems="center"
                justifyContent="space-between"
                padding="3px 15px"
                bg="neutral.3"
                borderRadius="sm"
                gap="8px"
              >
                <HiOutlineBellAlert />
                <Text>TODAY</Text>
              </Flex>
            </Flex>
            <Flex gap="8px" flexWrap="wrap" alignItems="center" mt="5">
              <Box
                padding="5px 15px"
                bg="green.800"
                borderRadius="md
                "
              >
                <Text color="green.200" fontWeight="bold">
                  ANDROID
                </Text>
              </Box>
              <Box
                padding="5px"
                bg="yellow.800"
                borderRadius="md
            
                "
              >
                <Text color="yellow.200" fontWeight="bold">
                  NODE
                </Text>
              </Box>
            </Flex>
          </CardBody>
          <CardFooter>
            <Flex justifyContent="space-between" w="100%">
              <Avatar
                name="Segun Adebayo"
                src="https://bit.ly/sage-adebayo"
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
      </VStack>
    </Grid>
  );
}

export default Task;
