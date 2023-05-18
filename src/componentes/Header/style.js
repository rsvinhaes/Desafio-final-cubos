import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    grow: {
        flexGrow: 1,

    },

    container: {
        backgroundColor: '#FDFDFD',
        padding: theme.spacing(0, 7),

    },

    logo: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },

    avatar: {
        padding: theme.spacing(1),
        width: theme.spacing(6),
        height: theme.spacing(7.2),
    },

    title: {
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
        color: '#252531',

    },

    sectionDesktop: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'flex',
        },
    },
    sectionMobile: {
        display: 'flex',
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
        color: "#252531"
    },
    icone: {
        backgroundColor: 'transparent', '&:hover': {
            backgroundColor: 'transparent',
        },
        color: '#383842',
        cursor: 'pointer'
    },
}));
