import { makeStyles } from '@mui/styles';
import { grey } from '@mui/material/colors';
import Hero from './partials/Hero';
import About from './partials/About';
import Socials from './partials/Socials';
import Section from '../../components/Section';
import Portfolio from './partials/Portfolio';

const useStyles = makeStyles((theme: any) => ({
  root: {
    height: '100%',
    width: '100%',
  },
  background: {
    background: theme.palette.alternate.dark,
  },
  shape: {
    background: theme.palette.alternate.dark,
    borderBottomRightRadius: '20%',
    borderBottomLeftRadius: '20%',
    borderBottom: `1px solid ${grey[200]}`,
    [theme.breakpoints.down('md')]: {
      height: 360,
    },
  },
}));

const Home = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.shape}>
        <Section>
          <Socials />
          <Hero />
        </Section>
      </div>
      <Section>
        <About />
      </Section>
      <Section className={classes.background} fullWidth={true}>
        <Portfolio />
      </Section>
    </div>
  );
};

export default Home;
