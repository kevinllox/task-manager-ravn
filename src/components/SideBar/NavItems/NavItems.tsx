import { Flex, Box, Link } from '@chakra-ui/react';
import { HiMiniSquares2X2, HiBars3 } from 'react-icons/hi2';

function NavItems() {
  return (
    <Box mt="10">
      <Flex
        alignItems="center"
        gap="10px"
        padding="5px 20px"
        alignContent="center"
      >
        <HiMiniSquares2X2 size="25px" color="gray" />
        <Link color="white" href="/" _hover={{ textDecoration: 'none' }}>
          DASHBOARD
        </Link>
      </Flex>
      <Flex
        alignItems="center"
        gap="10px"
        padding="5px 20px"
        alignContent="center"
      >
        <HiBars3 size="25px" color="gray" />
        <Link color="white" href="/" _hover={{ textDecoration: 'none' }}>
          MY TASK
        </Link>
      </Flex>
    </Box>
  );
}

export default NavItems;
