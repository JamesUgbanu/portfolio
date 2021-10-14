import { FC } from 'react';
import clsx from 'clsx';
import { makeStyles } from '@mui/styles';
import { Drawer } from '@mui/material';
import SidebarNav from './SideNav';

const useStyles = makeStyles((theme: any) => ({
    drawer: {
        width: '100%',
        maxWidth: 400,
    },
    root: {
        height: '100%',
        padding: theme.spacing(1),
        background: theme.palette.alternate.dark
    },
    nav: {
        marginBottom: theme.spacing(1),
    },
}));

type SidebarProps = {
    open: boolean,
    variant: any,
    onClose: () => void,
};


const Sidebar: FC<SidebarProps> = ({ open, variant, onClose, ...rest }) => {

    const classes = useStyles();

    return (
        <Drawer
            anchor="left"
            classes={{ paper: classes.drawer }}
            onClose={onClose}
            open={open}
            variant={variant}
        >
            <div {...rest} className={clsx(classes.root)}>
                <SidebarNav className={classes.nav} onClose={onClose} />
            </div>
        </Drawer>
    );
};

export default Sidebar;
