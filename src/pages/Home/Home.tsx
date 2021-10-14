import { makeStyles } from '@mui/styles';
import { grey } from '@mui/material/colors';
import Hero from './partials/Hero';
import About from './partials/About';
import Section from '../../components/Section'

const useStyles = makeStyles((theme: any) => ({
    root: {
        height: '100%',
        width: '100%',
    },
    shape: {
        background: theme.palette.alternate.dark,
        borderBottomRightRadius: '40%',
        borderBottom: `1px solid ${grey[200]}`,
        [theme.breakpoints.down('md')]: {
            height: 360
        },
    },
}));

const Home = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <div className={classes.shape}>
                <Section>
                    <Hero />
                </Section>
            </div>
            <Section>
                <About />
            </Section>
        </div>
    );
}

export default Home;