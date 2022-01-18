/* eslint-disable no-use-before-define */
import React, { useEffect, useCallback, useState } from 'react';
import { useLocation, matchPath, Link as RouterLink } from 'react-router-dom';
import PerfectScrollbar from 'react-perfect-scrollbar';

import PropTypes from 'prop-types';
import { Box, Divider, Drawer, Hidden, List, ListSubheader, makeStyles } from '@material-ui/core';
import NavItem from './NavItem';
import NavBarDrawer from './NavBarDrawer';
import { sections } from './sections';

function renderNavItems({ items, pathname, depth = 0 }) {
  return (
    <List disablePadding>
      {items.reduce((acc, item) => reduceChildRoutes({ acc, item, pathname, depth }), [])}
    </List>
  );
}

function reduceChildRoutes({ acc, pathname, item, depth }) {
  const key = item.title + depth;

    if (item.items) {
      const open = matchPath(pathname, {
        path: item.href,
        exact: false
      });

      acc.push(
        <NavItem
          depth={depth}
          icon={item.icon}
          info={item.info}
          key={key}
          open={Boolean(open)}
          title={item.title}
        >
          {renderNavItems({
            depth: depth + 1,
            pathname,
            items: item.items
          })}
        </NavItem>
      );
    } else {
      acc.push(
        <NavItem
          depth={depth}
          href={item.href}
          icon={item.icon}
          info={item.info}
          key={key}
          title={item.title}
        />
      );
    }
  return acc;
}

const useStyles = makeStyles(() => ({
  mobileDrawer: {
    width: 256
  }
}));

const NavBar = ({ onMobileClose, openMobile }) => {
  const [isContentScrollable, setIsContentScrollable] = useState(false);
  const classes = useStyles();
  const location = useLocation();

  const measuredRef = useCallback(node => {
    if (node !== null) {
      setIsContentScrollable(node.scrollHeight > node.clientHeight);
    }
  }, []);

  useEffect(() => {
    if (openMobile && onMobileClose) {
      onMobileClose();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]);

  const content = (
    <Box height="100%" display="flex" flexDirection="column" ref={measuredRef}>
      <PerfectScrollbar options={{ suppressScrollX: true }}>
        <Hidden lgUp>
          <Box p={2} display="flex" justifyContent="center">
            <RouterLink to="/">
              LOGO
            </RouterLink>
          </Box>
        </Hidden>
        <Divider />
        <Box>
          {sections.map((section, index) => (
            <List
              key={index}
              data-cy="apps-list"
              subheader={
                <ListSubheader disableGutters disableSticky>
                  {section.subheader ? section.subheader : ''}
                </ListSubheader>
              }
            >
              {renderNavItems({
                items: section.items,
                pathname: location.pathname
              })}
            </List>
          ))}
        </Box>
        <Divider />
      </PerfectScrollbar>
    </Box>
  );

  return (
    <>
      <Hidden lgUp>
        <Drawer
          anchor="left"
          classes={{ paper: classes.mobileDrawer }}
          onClose={onMobileClose}
          open={openMobile}
          variant="temporary"
        >
          {content}
        </Drawer>
      </Hidden>
      <Hidden mdDown>
        <NavBarDrawer isScrollable={isContentScrollable}>{content}</NavBarDrawer>
      </Hidden>
    </>
  );
};

NavBar.propTypes = {
  onMobileClose: PropTypes.func,
  openMobile: PropTypes.bool
};

export default NavBar;
