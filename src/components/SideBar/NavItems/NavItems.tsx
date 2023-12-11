import { Box, Link } from '@chakra-ui/react';
import { NavLink, useLocation } from 'react-router-dom';
import { NAVITEMS } from '../../../const/consts';

function NavItems() {
  const location = useLocation();
  return (
    <Box mt="10">
      {NAVITEMS.map(({ linkName, pathName, key, Icon }) => {
        const isActive = location.pathname === pathName;
        return (
          <Link
            key={key}
            color="white"
            to={pathName}
            as={NavLink}
            display="flex"
            alignItems="center"
            gap="10px"
            padding="15px 20px"
            alignContent="center"
            fontSize="14px"
            letterSpacing="1px"
            _activeLink={{
              backgroundImage:
                'linear-gradient(to right,rgba(45,48,52,0),rgba(218,85,73,.1))',
              borderRight: '3px solid #DA584B',
              color: 'primary.4',
              fontWeight: 'bold',
            }}
          >
            <Icon size="25px" color={isActive ? '#DA584B' : 'gray'} />
            {linkName}
          </Link>
        );
      })}
    </Box>
  );
}

export default NavItems;
