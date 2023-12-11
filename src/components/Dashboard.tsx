import { Flex } from '@chakra-ui/react';
import Sidebar from './SideBar/Sidebar';
import MainContent from './MainContent/MainContent';

function Dashboard() {
  return (
    <Flex bg="neutral.5" maxW="100%" h="100vh" padding="25px" gap="20px">
      <Sidebar />
      <MainContent />
    </Flex>
  );
}

export default Dashboard;
