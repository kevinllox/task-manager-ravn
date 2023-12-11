import { Button, Flex, Heading, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { HiHome } from 'react-icons/hi';
import { ROUTES } from '../../const/consts';

function NoteFound() {
  return (
    <Flex
      height="100vh"
      alignItems="center"
      justifyContent="center"
      direction="column"
      bg="neutral.5"
      color="white"
    >
      <Heading mb={4} fontWeight="bold">
        404 | Page Not Found
      </Heading>
      <Text fontSize="lg">
        You just hit a route that doesnt exist... the sadness.😢
      </Text>
      <Button rightIcon={<HiHome />} marginTop="1rem">
        <Link to={ROUTES.home}>Back to Home</Link>
      </Button>
    </Flex>
  );
}

export default NoteFound;
