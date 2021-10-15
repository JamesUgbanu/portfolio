import { FC, ReactNode } from 'react';
import clsx from 'clsx';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme: any) => ({
    root: {
        maxWidth: 1100,
        width: '100%',
        margin: '0 auto',
        padding: theme.spacing(6, 2),
        [theme.breakpoints.up('sm')]: {
            padding: theme.spacing(2, 2),
        },
    },
    fullWidth: {
        maxWidth: '100%',
    },
    disablePadding: {
        padding: 0,
    },
    narrow: {
        maxWidth: 800,
    },
}));
type SectionProps = {
    children: ReactNode,
    fullWidth?: boolean,
    narrow?: string,
    disablePadding?: boolean,
    className?: string,
};

const Section: FC<SectionProps> = ({
    children,
    fullWidth,
    narrow,
    disablePadding,
    className,
    ...rest
}) => {

    const classes = useStyles();

    return (
        <section
            className={clsx(
                'section',
                classes.root,
                fullWidth ? classes.fullWidth : {},
                narrow ? classes.narrow : {},
                disablePadding ? classes.disablePadding : {},
                className,
            )}
            {...rest}
        >
            {children}
        </section>
    );
};
export default Section;
