import {
  Box,
  Heading,
  Text,
  Flex,
  Spinner,
  Avatar,
  Badge,
  VStack,
} from '@chakra-ui/react';
import { useQuery } from '@apollo/client';
import ProfileApiResponse from '../../interfaces/ProfileApiResponse';
import GET_PROFILE from '../../graphql/querys/getProfile';
import profilePic from '../../assets/profile-pic.jpg';

function Profile() {
  const { loading, data, error } = useQuery<ProfileApiResponse>(GET_PROFILE);
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
  if (error) {
    <Flex justifyContent="center">
      <Text>We could not get your profile:(</Text>
    </Flex>;
  }
  return (
    <Box
      maxW="lg"
      maxH="xs"
      borderRadius="lg"
      overflow="hidden"
      margin="0 auto"
      p={10}
      shadow="lg"
      bg="neutral.4"
      flex="1"
    >
      <Flex align="center" mb={4}>
        <Avatar size="lg" name={data?.profile.avatar} src={profilePic} />
        <Box ml={3}>
          <Heading as="h2" size="lg" color="neutral.1">
            {data?.profile.fullName}
          </Heading>
          <Badge variant="outline" colorScheme="green">
            {data?.profile.type}
          </Badge>
        </Box>
      </Flex>

      <VStack spacing={2} align="start">
        <Text color="neutral.1">
          <strong>Email:</strong> {data?.profile.email}
        </Text>
        <Text color="neutral.1">
          <strong>Created At:</strong>{' '}
          {new Date(data?.profile.createdAt || '').toUTCString()}
        </Text>
        <Text color="neutral.1">
          <strong>Updated At:</strong>{' '}
          {new Date(data?.profile.updatedAt || '').toUTCString()}
        </Text>
      </VStack>
    </Box>
  );
}

export default Profile;
