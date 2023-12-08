import { Flex, Box, Image } from '@chakra-ui/react';
import ravnLogo from '../assets/ravn-logo.svg';
import NavItems from './NavItems';

function Sidebar() {
  return (
    <>
      <Box
        bg="neutral.3"
        w="232px"
        height="100%"
        borderRadius="2xl"
        paddingTop="15px"
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
