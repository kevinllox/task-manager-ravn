import { HiMiniSquares2X2, HiBars3 } from 'react-icons/hi2';
import { HiUser } from 'react-icons/hi';

const ROUTES = {
  home: '/task-manager-ravn/',
  settings: '/task-manager-ravn/settings',
  notFound: '*',
};

const NAVITEMS = [
  {
    key: 'dashboard',
    linkName: 'DASHBOARD',
    pathName: '/task-manager-ravn/',
    Icon: HiMiniSquares2X2,
  },
  {
    key: 'my-task',
    linkName: 'MY TASK',
    pathName: '/task-manager-ravn/task',
    Icon: HiBars3,
  },
  {
    key: 'profile',
    linkName: 'PROFILE',
    pathName: '/task-manager-ravn/settings',
    Icon: HiUser,
  },
];

export { ROUTES, NAVITEMS };
