import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Button, Box, Container, Typography, makeStyles } from '@material-ui/core';
import AddIcon from '@material-ui/icons/AddCircleOutline';
import { Helmet } from 'react-helmet';
import { doNoting } from '../../utils';
import { get } from 'lodash';
import { useSelector } from 'react-redux';
import styles from './styles';

const useStyles = makeStyles(styles);

const Page = ({
  pageTitle,
  title,
  filters,
  addAction,
  addLabel,
  actions,
  children,
  maxWidth
}) => {
  const classes = useStyles();
  const isMenuCollapsed = useSelector(state => get(state, 'root.isNavMenuCollapsed', false));

  return (
    <Box className={classes.root}>
      <Helmet>
        <title>{pageTitle}</title>
      </Helmet>
      <Container className={classes.container} maxWidth={isMenuCollapsed ? false : maxWidth}>
        <Box
          className={classes.header}
          alignItems="flex-end"
          justifyContent="space-between"
          flexWrap="wrap"
          mb={3}
        >
          <Typography variant="h5" color="textPrimary" className={classes.title}>
            {title}
          </Typography>
          {filters && (
            <Box display="flex" alignItems="center">
              {filters}
            </Box>
          )}

        </Box>
        {children}
      </Container>
    </Box>
  );
};

Page.propTypes = {
  pageTitle: PropTypes.string,
  title: PropTypes.string,
  addAction: PropTypes.func,
  addLabel: PropTypes.string,
  actions: PropTypes.node,
  filters: PropTypes.node,
  children: PropTypes.node,
  maxWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.bool])
};

Page.defaultProps = {
  pageTitle: 'New page',
  title: 'Untitled Items',
  addAction: doNoting,
  addLabel: 'Add new',
  actions: null,
  filters: null,
  children: null,
  maxWidth: 'lg'
};

export default Page;
