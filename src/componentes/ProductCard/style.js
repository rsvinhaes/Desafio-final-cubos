import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({

    containerProductCard: {
        width: '260px',
        height: '360px',
        borderRadius: '8px',
        // margin: '0 8px 16px'
        marginBottom: '16px'
    },

    productCard: {
        height: '100%',
        padding: '15px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'start',
        justifyContent: 'space-between'
    },

    cardContent: {
        padding: 0,
    },

    title: {
        fontFamily: 'Public Sans',
        fontWeight: 500,
        fontSize: '14px',
        color: '#191919',
    },
    value: {

        fontFamily: 'Public Sans',
        fontWeight: 600,
        fontSize: '20px',
        color: '#D10070',

    },

}));
