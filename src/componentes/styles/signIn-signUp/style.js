import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({

    box: {
        width: theme.spacing(56),
        padding: theme.spacing(2, 4),
        backgroundColor: '#FCFCFC',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.15)',
        borderRadius: '6px',
        margin: '0 20px'
    },

    avatar: {
        width: theme.spacing(5.7),
        height: theme.spacing(7.2)
    },

    form: {
        width: '100%',
    },

    label: {
        fontWeight: 700,
        color: '#383842',
        fontSize: theme.spacing(2),
        paddingLeft: theme.spacing(0.5),
        paddingTop: theme.spacing(1.5),
    },

    text: {
        backgroundColor: ' #F8F8F8',
        borderRadius: '6px',
        border: '1.5px solid #858585'
    },

    submit: {
        marginTop: theme.spacing(4),
        padding: theme.spacing(2, 2.2),
        borderRadius: '30px',
        color: "#F3F3F3",
    },
}));