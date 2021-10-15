import clsx from 'clsx';
import { makeStyles } from '@mui/styles';
import { useTheme } from '@mui/material';
import { useMediaQuery, Grid, Box } from '@mui/material';
import Typewriter from 'typewriter-effect';
import Image from '../../../components/Image';

const useStyles = makeStyles((theme: any) => ({
    root: {

    },
    imageContainer: {
        background: '#000',
        borderRadius: "50%",
        maxWidth: 400,
        overflow: "hidden",
        [theme.breakpoints.down('md')]: {
            maxWidth: 250,
        },
    },
    image: {
        marginTop: -20,
    },
}));

const Hero = () => {
    const classes = useStyles();

    const theme = useTheme();
    const isMd = useMediaQuery(theme.breakpoints.up('md'), {
        defaultMatches: true,
    });
    const typedFirstFont = isMd ? "2em" : "1.5em";
    const typedSecondFont = isMd ? "2.5em" : "1.5em";

    return (
        <div className={clsx(classes.root)}>
            <Grid
                container
                spacing={4}
                direction={isMd ? 'row' : 'column-reverse'}
            >
                <Grid
                    item
                    container
                    alignItems="center"
                    xs={12}
                    md={6}
                    justifyContent={isMd ? "flex-start" : "center"}
                >
                    <Box  mt={isMd ? -5 : -2}>
                        <Typewriter
                            onInit={(typewriter) => {
                                typewriter.typeString(`<span style='font-size: ${typedFirstFont};'>Hi, I am </span>`)
                                typewriter.typeString(`<strong style='font-size: ${typedSecondFont}; color: #F2AE32'>James Ugbanu!</strong>`)
                                    .pauseFor(300)
                                    .deleteChars(13)
                                    .typeString(`<strong style='font-size: ${typedSecondFont}; color: #F2AE32'>a Software Developer!</strong>`)
                                    .pauseFor(1000)
                                    .start();
                            }}
                            options={{
                                autoStart: true,
                                loop: true,
                            }}
                        />
                    </Box>
                </Grid>
                <Grid
                    item
                    container
                    alignItems="center"
                    xs={12}
                    md={6}
                    justifyContent="center"
                    data-aos={'fade-up'}
                >
                    <Box className={classes.imageContainer}
                        data-aos="flip-left"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="2000"
                        mt={isMd ? -5 : -2}
                    >
                        <Image
                            src="/james.png"
                            alt="James Ugbanu"
                            className={classes.image}
                            lazy={true}
                        />
                    </Box>
                </Grid>
            </Grid>
        </div>
    );
};

export default Hero;
