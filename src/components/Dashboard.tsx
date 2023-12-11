import { Flex } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';
import Sidebar from './SideBar/Sidebar';

function Dashboard() {
  return (
    <Flex bg="neutral.5" maxW="100%" h="100vh" padding="25px" gap="20px">
      <Sidebar />
      <Outlet />
    </Flex>
  );
}

export default Dashboard;
