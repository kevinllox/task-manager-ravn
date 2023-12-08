import { Input, Flex, Box, IconButton, Image } from '@chakra-ui/react';
import { Search2Icon } from '@chakra-ui/icons';
import { HiOutlineBell } from 'react-icons/hi';
import profilePic from '../assets/profile-pic.jpg';

function SearchBar() {
  return (
    <Flex
      alignItems="center"
      bg="neutral.3"
      borderRadius="xl"
      padding="5px 3px"
    >
      <Box flex="1">
        <Flex>
          <IconButton
            aria-label="Search"
            icon={<Search2Icon />}
            colorScheme="neutral"
            ml={2}
          />
          <Input
            placeholder="Search..."
            color="neutral.1"
            border="none"
            _focus={{ border: 'none', boxShadow: 'none' }}
          />
        </Flex>
      </Box>

      {/* Profile Section */}
      <Box mr={4} display="flex" gap="3px">
        <IconButton
          aria-label="Search"
          icon={<HiOutlineBell size="25px" />}
          colorScheme="neutral"
        />
        <Image
          src={profilePic}
          borderRadius="full"
          boxSize="40px"
          alt="Profile Pic"
        />
      </Box>
    </Flex>
  );
}

export default SearchBar;
