import clsx from 'clsx';
import { makeStyles } from '@mui/styles';
import { useTheme } from '@mui/material';
import { useMediaQuery, Grid, Box } from '@mui/material';
import Typewriter from 'typewriter-effect';
import Image from '../../../components/Image';

const useStyles = makeStyles((theme: any) => ({
    root: {},
    imageContainer: {
        background: '#000',
        borderRadius: "50%",
        maxWidth: 450,
        overflow: "hidden",
        [theme.breakpoints.down('md')]: {
            maxWidth: 400,
        },
    },
    image: {
        marginTop: -30,
    },
}));

const Hero = () => {
    const classes = useStyles();

    const theme = useTheme();
    const isMd = useMediaQuery(theme.breakpoints.up('md'), {
        defaultMatches: true,
    });

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
                    justifyContent="flex-start"
                >
                    <Box ml={isMd ? 12 : 2}>
                    <Typewriter
                        onInit={(typewriter) => {
                            typewriter.typeString('<span style="font-size: 2em;">I am a </span>')
                            typewriter.typeString('<strong style="font-size: 2.5em; color: #F2AE32">ReactJs Developer!</strong>')
                                .pauseFor(300)
                                .deleteChars(18)
                                .typeString('<strong style="font-size: 2.5em; color: #F2AE32">React Native Developer!</strong>')
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
