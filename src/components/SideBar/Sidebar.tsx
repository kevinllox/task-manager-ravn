import { Flex, Box, Image } from '@chakra-ui/react';
import ravnLogo from '../../assets/ravn-logo.svg';
import NavItems from './NavItems/NavItems';

function Sidebar() {
  return (
    <>
      <Box
        bg="neutral.4"
        w="250px"
        borderRadius="2xl"
        paddingTop="15px"
        overflow="hidden"
      >
        {/* Logo Ravn */}
        <Box width="100%" display="flex" justifyContent="center">
          <Image boxSize="40px" src={ravnLogo} alt="Dan Abramov" />
        </Box>
        {/* NavItems */}
        <NavItems />
      </Box>
      <Flex />
    </>
  );
}

export default Sidebar;
