import { Container } from '@chakra-ui/react';
import Sidebar from './SideBar/Sidebar';
import MainContent from './MainContent/MainContent';

function Dashboard() {
  return (
    <Container
      bg="neutral.5"
      maxW="100%"
      h="100vh"
      padding="25px"
      display="flex"
      gap="20px"
    >
      <Sidebar />
      <MainContent />
    </Container>
  );
}

export default Dashboard;
