import { makeStyles } from '@mui/styles';
import clsx from 'clsx';
import {
  Toolbar,
  Hidden,
  List,
  ListItem,
  Typography,
  IconButton,
  Button,
} from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';
import Image from '../../../components/Image';

const useStyles = makeStyles((theme: any) => ({
  root: {
    background: theme.palette.alternate.dark,
  },
  flexGrow: {
    flexGrow: 1,
  },
  navigationContainer: {
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  toolbar: {
    maxWidth: 1100,
    width: '100%',
    margin: '0 auto',
    padding: theme.spacing(2),
  },
  listItem: {
    cursor: 'pointer',
    paddingTop: 0,
    paddingBottom: 0,
  },
  listItemText: {
    flex: '0 0 auto',
    whiteSpace: 'nowrap',
    textDecoration: 'none',
    '&:hover': {
      color: theme.palette.action.hover,
    },
  },
  listItemButton: {
    whiteSpace: 'nowrap',
    borderRadius: "50px !important",
    // '&:hover': {
    //   border: 1,
    //   borderColor: '#F2AE32 !important',
    //   background: 'transparent !important'
    // }
  },
  iconButton: {
    padding: 0,
    '&:hover': {
      background: 'transparent',
    },
  },
  logoContainer: {
    [theme.breakpoints.down('md')]: {
      width: 40,
      height: 40,
    },
  },
  logoImage: {
    width: 60,
    height: 60,
  },
}));

const Topbar = ({ onSidebarOpen, ...rest }: { onSidebarOpen: () => void }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
    <Toolbar disableGutters className={clsx(classes.toolbar)} {...rest}>
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
      <div className={classes.flexGrow} />
      <Hidden smDown>
        <List className={classes.navigationContainer}>
          <ListItem className={classes.listItem}>
            <Typography
              variant="body1"
              color="textPrimary"
              className={classes.listItemText}
              component="a"
              href="/"
            >
              Home
            </Typography>
          </ListItem>
          <ListItem className={classes.listItem}>
            <Typography
              variant="body1"
              color="textPrimary"
              className={classes.listItemText}
              component="a"
              href="#about"
            >
              About
            </Typography>
          </ListItem>
          <ListItem className={classes.listItem}>
            <Typography
              variant="body1"
              color="textPrimary"
              className={classes.listItemText}
              component="a"
              href="#portfolio"
            >
              Portfolio
            </Typography>
          </ListItem>
          <ListItem className={classes.listItem}>
            <Button
              size="large"
              variant="contained"
              color="primary"
              component="a"
              href="#contact"
              data-aos="zoom-in"
              className={classes.listItemButton}
            >
              Contact
            </Button>
          </ListItem>
        </List>
      </Hidden>
      <Hidden mdUp>
        <IconButton
          className={classes.iconButton}
          onClick={onSidebarOpen}
          aria-label="Menu"
          color="primary"
          size="large"
        >
          <MenuIcon fontSize="large" />
        </IconButton>
      </Hidden>
    </Toolbar>
    </div>
  );
};


export default Topbar;
