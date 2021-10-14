import { useState, ReactNode } from 'react';
import clsx from 'clsx';
import { useTheme } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { useMediaQuery } from '@mui/material';
import Topbar from './Topbar';
import Sidebar from './Sidebar';

const useStyles = makeStyles((theme: any) => ({
  root: {
  },
}));

const Main = ({ children }: { children: ReactNode }) => {

  const classes = useStyles();

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  const [openSidebar, setOpenSidebar] = useState(false);

  const handleSidebarOpen = () => {
    setOpenSidebar(true);
  };

  const handleSidebarClose = () => {
    setOpenSidebar(false);
  };

  const open = isMd ? false : openSidebar;

  return (
    <div
      className={clsx({
        [classes.root]: true,
      })}
    >
      <Topbar onSidebarOpen={handleSidebarOpen} />
      <Sidebar
        onClose={handleSidebarClose}
        open={open}
        variant="temporary"
      />
      <main>
        {/* <Divider /> */}
        {children}
      </main>
    </div>
  );
};

export default Main;
