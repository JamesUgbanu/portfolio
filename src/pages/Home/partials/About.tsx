import { makeStyles } from '@mui/styles';
import { Grid, Typography } from '@mui/material';

const useStyles = makeStyles((theme: any) => ({
    root: {
        marginTop: 5,
        maxWidth: 1100
    },
}));

const About = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid
                container
                spacing={4}
                justifyContent="center"
                data-aos="fade-up"
            >
                <Grid
                    item
                    container
                    alignItems="center"
                    justifyContent="center"
                >
                    <Grid item xs={12} className="section-header__title-wrapper">
                        <Typography
                            variant="h3"
                            align="center"
                            color="secondary"
                        >
                            About
                        </Typography>
                    </Grid>
                    <Grid item xs={12} className="section-header__subtitle-wrapper">
                        <Typography
                            variant="h6"
                            align="center"
                            color="textSecondary"
                            className="section-header__subtitle"
                        >
                            James is a diligent software engineer with 6 years of experience in commercial application development.
                            He build innovative and cutting edge business solutions for the impressive suite of clients within its
                            global reach. He has worked in several industry segments such as telecommunication, consulting, internet
                            service provider. He his also an avid open-source developer.
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
}

export default About;
