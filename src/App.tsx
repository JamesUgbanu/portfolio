import { useEffect } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { useRoutes } from 'react-router-dom';
import AOS from 'aos';
import theme from './theme';
import routes from './routes';
import 'react-lazy-load-image-component/src/effects/opacity.css';
import 'aos/dist/aos.css';


const App = () => {
  const routing = useRoutes(routes);

  useEffect(() => {
    AOS.init({
      once: true,
      delay: 50,
      duration: 500,
      easing: 'ease-in-out',
    });
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {routing}
    </ThemeProvider>
  );
}

export default App;