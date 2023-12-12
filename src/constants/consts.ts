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

const POINT_ESTIMATE = {
  ZERO: 0,
  ONE: 1,
  TWO: 2,
  FOUR: 4,
  EIGHT: 8,
};

const TAGS = {
  ANDROID: 'green',
  IOS: 'yellow',
  NODE_JS: 'gray',
  RAILS: 'purple',
  REACT: 'cyan',
};

const DEFAULT_TAGS = ['REACT', 'ANDROID', 'IOS', 'RAILS', 'NODE_JS'];

export { ROUTES, NAVITEMS, POINT_ESTIMATE, TAGS, DEFAULT_TAGS };
