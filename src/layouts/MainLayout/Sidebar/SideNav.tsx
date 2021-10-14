import clsx from 'clsx';
import { makeStyles } from '@mui/styles';
import {
  List,
  ListItem,
  Typography,
  ListItemIcon,
  Button,
} from '@mui/material';
import { Close as CloseIcon } from '@mui/icons-material';

const useStyles = makeStyles(theme => ({
  root: {
  },
  listItem: {
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  listItemIcon: {
    minWidth: 'auto',
  },
  listItemLink: {
    textDecoration: 'none',
  },
  closeIcon: {
    justifyContent: 'flex-end',
    cursor: 'pointer',
  },
  divider: {
    width: '100%',
  },
}));

const SidebarNav = ({ onClose, className, ...rest } : { onClose: () => void, className: string}) => {
  const classes = useStyles();

  return (
    <List {...rest} className={clsx(classes.root, className)}>
      <ListItem className={classes.closeIcon} onClick={onClose}>
        <ListItemIcon className={classes.listItemIcon}>
          <CloseIcon color="primary" fontSize="large" />
        </ListItemIcon>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Typography
          variant="h6"
          color="primary"
          component="a"
          href="/"
          className={classes.listItemLink}
        >
          Home
        </Typography>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Typography
          variant="h6"
          color="primary"
          component="a"
          href="/about"
          className={classes.listItemLink}
        >
          About
        </Typography>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Typography
          variant="h6"
          color="primary"
          component="a"
          href="/portfolio"
          className={classes.listItemLink}
        >
          Portfolio
        </Typography>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          size="large"
          variant="contained"
          color="primary"
          fullWidth
          component="a"
          target="blank"
          href="/contact"
        >
          Contact
        </Button>
      </ListItem>
    </List>
  );
};
export default SidebarNav;
