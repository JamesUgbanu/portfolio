import { makeStyles } from '@mui/styles';
import { List, ListItemButton } from '@mui/material';
import { GitHub, LinkedIn } from '@mui/icons-material';

const useStyles = makeStyles(() => ({
  root: {},
  list: {
    '&:hover': {
      background: 'transparent !important',
    },
  },
}));

const Social = () => {
  const classes = useStyles();

  return (
    <div style={{ position: 'absolute', top: 150, left: 15 }}>
      <List className={classes.root} data-aos="fade-right">
        <ListItemButton
          disableGutters
          component="a"
          href="https://github.com/jamesugbanu"
          target="blank"
          className={classes.list}
        >
          <GitHub sx={{ color: '#fff', fontSize: 30 }} />
        </ListItemButton>
        <ListItemButton
          disableGutters
          component="a"
          href="https://linkedin.com/in/james-ugbanu/"
          target="blank"
          className={classes.list}
        >
          <LinkedIn sx={{ color: '#fff', fontSize: 30 }} />
        </ListItemButton>
      </List>
    </div>
  );
};

export default Social;
