import React, {useState} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import MenuIcon from '@material-ui/icons/Menu';
import {Button, Drawer, makeStyles} from '@material-ui/core';
import {useDispatch} from 'react-redux';
import {setNavMenuCollapsed} from '../../../store/rootActions';

const drawerWidth = 256;

const useStyles = isScrollable =>
    makeStyles(theme => ({
        root: {
            display: 'flex'
        },
        drawerPaper: {
            position: 'relative',
            whiteSpace: 'nowrap',
            width: drawerWidth,
            top: 64,
            height: 'calc(100% - 64px)',
            transition: theme.transitions.create('width', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen
            })
        },
        drawerPaperClose: {
            transition: theme.transitions.create('width', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen
            }),
            width: theme.spacing(7),
            [theme.breakpoints.up('sm')]: {
                width: theme.spacing(isScrollable ? 7 : 5)
            }
        },
        toggleButton: {
            color: theme.palette.text.secondary,
            padding: '10px 8px',
            justifyContent: 'flex-start',
            textTransform: 'none',
            letterSpacing: 0,
            width: '100%',
            fontWeight: theme.typography.fontWeightRegular
        },
        toggleButtonIcon: {
            display: 'flex',
            alignItems: 'center',
            marginRight: theme.spacing(1)
        }
    }));

const NavBarDrawer = ({isScrollable, children}) => {
    const [open, setOpen] = useState(true);
    const dispatch = useDispatch();
    const classes = useStyles(isScrollable)();

    const toggleDrawerOpen = () => {
        setOpen(!open);
        dispatch(setNavMenuCollapsed(open));
    };

    return (
        <div className={classes.root}>
            <Drawer
                variant="permanent"
                classes={{
                    paper: classNames(classes.drawerPaper, !open && classes.drawerPaperClose)
                }}
                open={open}
                anchor="left"
            >
                <Button className={classes.toggleButton} onClick={toggleDrawerOpen}>
                    <MenuIcon className={classes.toggleButtonIcon} size="20"/>
                </Button>
                {children}
            </Drawer>
        </div>
    );
};

export default NavBarDrawer;

NavBarDrawer.propTypes = {
    children: PropTypes.any.isRequired,
    isScrollable: PropTypes.any.isRequired
};
