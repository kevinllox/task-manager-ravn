import { HiMiniSquares2X2, HiBars3 } from 'react-icons/hi2';
import { HiUser } from 'react-icons/hi';

const ROUTES = {
  home: '/',
  settings: '/settings',
  notFound: '*',
};

const NAVITEMS = [
  {
    key: 'dashboard',
    linkName: 'DASHBOARD',
    pathName: '/',
    Icon: HiMiniSquares2X2,
  },
  {
    key: 'my-task',
    linkName: 'MY TASK',
    pathName: '/task',
    Icon: HiBars3,
  },
  {
    key: 'profile',
    linkName: 'PROFILE',
    pathName: '/settings',
    Icon: HiUser,
  },
];

export { ROUTES, NAVITEMS };
