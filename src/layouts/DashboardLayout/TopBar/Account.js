import React, {useRef, useState} from 'react';
import {Box, ButtonBase, Hidden, makeStyles, Menu, MenuItem, Typography} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    avatar: {
        height: 32,
        width: 32,
        marginRight: theme.spacing(1)
    },
    popover: {
        minWidth: 200,
        padding: '5px 0'
    }
}));

const Account = () => {
    const classes = useStyles();
    const ref = useRef(null);
    const [isOpen, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };


    return (
        <>
            <Box display="flex" alignItems="center" onClick={handleOpen} component={ButtonBase} ref={ref}
                 data-cy="dashboard-logout">
                <Hidden smDown>
                    <Typography variant="h6" color="inherit">
                        User name
                    </Typography>
                </Hidden>
            </Box>
            <Menu
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center'
                }}
                keepMounted
                PaperProps={{className: classes.popover}}
                getContentAnchorEl={null}
                anchorEl={ref.current}
                open={isOpen}
            >
                <MenuItem>
                    <Typography variant="body2" color="textSecondary">
                        test@test.te
                    </Typography>
                </MenuItem>

            </Menu>
        </>
    );
};

export default Account;
