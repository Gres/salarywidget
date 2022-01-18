import React from 'react';
import {Link as RouterLink} from 'react-router-dom';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import {AppBar, Box, Hidden, IconButton, makeStyles, SvgIcon, Toolbar} from '@material-ui/core';
import {Menu as MenuIcon} from 'react-feather';
import {THEMES} from '../../../constants';
import Account from './Account';
import {doNoting} from "../../../utils";

const useStyles = makeStyles(theme => ({
    root: {
        zIndex: theme.zIndex.drawer + 100,
        ...(theme.name === THEMES.LIGHT
            ? {
                boxShadow: 'none',
                backgroundColor: theme.palette.primary.main
            }
            : {}),
        ...(theme.name === THEMES.ONE_DARK
            ? {
                backgroundColor: theme.palette.background.default
            }
            : {})
    },
    toolbar: {
        minHeight: 64
    }
}));

const TopBar = ({className, onMobileNavOpen, ...rest}) => {
    const classes = useStyles();

    return (
        <AppBar className={clsx(classes.root, className)} {...rest}>
            <Toolbar className={classes.toolbar}>
                <Hidden lgUp>
                    <IconButton color="inherit" onClick={onMobileNavOpen} data-cy="dashboard-list-app">
                        <SvgIcon fontSize="small">
                            <MenuIcon/>
                        </SvgIcon>
                    </IconButton>
                </Hidden>
                <Hidden mdDown>
                    <RouterLink to="/">
                        logo
                    </RouterLink>
                </Hidden>
                <Box ml={2} flexGrow={1}></Box>
                <Box ml={2}>
                    <Account/>
                </Box>
            </Toolbar>
        </AppBar>
    );
};

TopBar.propTypes = {
    className: PropTypes.string,
    onMobileNavOpen: PropTypes.func
};

TopBar.defaultProps = {
    onMobileNavOpen: doNoting
};

export default TopBar;
