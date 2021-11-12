import { makeStyles } from '@mui/styles';
import {
  ImageList,
  ImageListItem,
  ImageListItemBar,
  IconButton,
  Grid,
  Typography,
} from '@mui/material';
import { Info as InfoIcon } from '@mui/icons-material';
import { useTheme, useMediaQuery } from '@mui/material';
import Image from '../../../components/Image';

const useStyles = makeStyles(() => ({
  root: {},
  image: {},
}));

const itemData = [
  {
    img: '/images/contact-center.png',
    name: 'Contact Center Solution',
    desciption:
      'An application that accepts customers queries through phone calls and WhatsApp. These calls are logged and inquiry passed along to a CRM.',
  },
  {
    img: '/images/rmonitor.png',
    name: 'RMonitor',
    desciption:
      'An advanced and automated telemetry system where measurement of temperature, pressure, rate of flow and other parameters of remote assets can be obtained without any physical presence',
  },
  {
    img: '/images/frendzy.png',
    name: 'Frendzy Mobile App',
    desciption: 'Create your own or join an existing Frendzy.',
  },
];

const Portfolio = () => {
  const classes = useStyles();
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <Grid justifyContent="center" data-aos="fade-up">
      <Grid item xs={12} className="section-header__title-wrapper">
        <Typography variant="h3" align="center" color="textPrimary">
          Portfolio
        </Typography>
      </Grid>
      <ImageList cols={isMd ? 2 : 1} gap={8}>
        {itemData.map((item, i) => (
          <ImageListItem key={i}>
            <Image
              src={item.img}
              alt={item.name}
              lazy={true}
              className={classes.image}
            />
            <ImageListItemBar
              title={item.name}
              subtitle={item.desciption}
              actionIcon={
                <IconButton
                  sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                  aria-label={`info about ${item.name}`}
                >
                  <InfoIcon />
                </IconButton>
              }
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Grid>
  );
};

export default Portfolio;
