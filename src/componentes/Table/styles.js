import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({

    containerTable: {
        minHeight: '500px',
        maxWidth: '100%',

    },

    tableHead: {
        width: '100%',
        height: '58px',
        background: '#FAFAFA',
        borderRadius: '10px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'spacebetween',

    },

    imgPageMain: {
        display: 'flex',
        padding: '15px',
        height: '60px',
        width: '60px'

    },

    imgEmptyMain: {
        display: 'flex',
        alignItems: 'center',
        margin: '10rem',
        height: '40rem',
        width: '40rem',
        [theme.breakpoints.down('xs')]: {
            marginTop: '10rem',
            height: '20rem',
            width: '20rem',
        },
    }


}));

