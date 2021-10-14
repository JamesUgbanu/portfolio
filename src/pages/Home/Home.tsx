import { makeStyles } from '@mui/styles';
import Hero from './partials/Hero'

const useStyles = makeStyles({
    root: {
        minHeight: '100vh',
    },
});

const Home = () => {
    const classes = useStyles();

    return (
        
        <div className={classes.root}>
            <Hero />
        </div>
    );
}

export default Home;
