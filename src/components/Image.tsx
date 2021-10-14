import { FC } from 'react';
import clsx from 'clsx';
import { makeStyles } from '@mui/styles';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const useStyles = makeStyles(() => ({
  root: {
    width: '100%',
    height: '100%',
  },
  dBlock: {
    display: 'block',
  },
}));

type ImageProps = {
  src: string,
  alt: string,
  lazy: Boolean,
  className: string,
};


/**
 * Component to display the images
 *
 * @param {Object} props
 */
const Image: FC<ImageProps> = ({ src, alt, lazy, className, ...rest }) => {

  const classes = useStyles();
  if (lazy) {
    return (
      <LazyLoadImage
        className={clsx('image', classes.root, classes.dBlock, className)}
        alt={alt}
        src={src}
        effect="opacity"
        {...rest}
      />
    );
  }

  return (
    <img
      className={clsx('image', classes.root, className)}
      alt={alt}
      src={src}
      {...rest}
    />
  );
};

export default Image;
