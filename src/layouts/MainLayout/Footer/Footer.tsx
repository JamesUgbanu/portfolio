import clsx from 'clsx';
import { makeStyles } from '@mui/styles';
import { List, ListItem } from '@mui/material';
import Image from '../../../components/Image';

const useStyles = makeStyles((theme: any) => ({
    root: {
        padding: theme.spacing(3, 2),
        [theme.breakpoints.up('md')]: {
            padding: theme.spacing(2, 0),
        },
        background: theme.palette.background.footer,
    },
    footerContainer: {
        maxWidth: 1100,
        width: '100%',
        margin: '0 auto',
    },
    logoContainerItem: {
        paddingTop: 0,
    },
    logoContainer: {
        width: 40,
        height: 40,
    },
    logoImage: {
        width: '100%',
        height: '100%',
    },

}));

const Footer = ({ ...rest }) => {

    const classes = useStyles();

    return (
        <div {...rest} className={clsx(classes.root)}>
            <div className={classes.footerContainer}>
                <List disablePadding>
                    <ListItem disableGutters className={classes.logoContainerItem}>
                        <div className={classes.logoContainer}>
                            <a href="/" title="James Ugbanu">
                                <Image
                                    className={classes.logoImage}
                                    src="/logo.png"
                                    alt="James Ugbanu"
                                    lazy={false}
                                />
                            </a>
                        </div>
                    </ListItem>
                </List>
            </div>
        </div>
    );
};


export default Footer;
