import React, {useRef, useState} from 'react';
import {Box, IconButton, makeStyles, Popover, SvgIcon, TextField, Tooltip, Typography} from '@material-ui/core';
import {Settings as SettingsIcon} from 'react-feather';
import useSettings from 'src/hooks/useSettings';
import {THEMES} from 'src/constants';
import {translate} from 'src/utils';

const useStyles = makeStyles((theme) => ({
    popover: {
        width: 320,
        padding: theme.spacing(2)
    }
}));

const Settings = () => {
    const classes = useStyles();
    const ref = useRef(null);
    const {settings, saveSettings} = useSettings();
    const [isOpen, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    const handleChange = event => {
        saveSettings({[event.target.name]: event.target.value});
    };

    return <>
        <Tooltip title="Settings">
            <IconButton color="inherit" onClick={handleOpen} ref={ref} data-cy="dashboard-settings">
                <SvgIcon fontSize="small">
                    <SettingsIcon/>
                </SvgIcon>
            </IconButton>
        </Tooltip>
        <Popover
            anchorOrigin={{vertical: 'bottom', horizontal: 'center'}}
            classes={{paper: classes.popover}}
            anchorEl={ref.current}
            onClose={handleClose}
            open={isOpen}
        >
            <Typography variant="h4" color="textPrimary">
                {translate('views.settings.title')}
            </Typography>
            <Box mt={2}>
                <TextField
                    fullWidth
                    label={translate('views.settings.fields.theme')}
                    name="theme"
                    onChange={handleChange}
                    select
                    SelectProps={{native: true}}
                    value={settings.theme}
                    variant="standard">
                    {Object.keys(THEMES).map((theme) => (
                        <option key={theme} value={theme}>
                        </option>
                    ))}
                </TextField>
            </Box>
        </Popover>
    </>;
}

export default Settings;
