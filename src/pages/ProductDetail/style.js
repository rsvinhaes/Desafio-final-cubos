import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({

    containerPageDetailProduct: {
        backgroundColor: '#E5E5E5',
        maxWidth: '100%',
        minHeight: 'calc(100vh - 64px)',
        display: 'flex',
        flexDirection: 'column',
        padding: '20px 64px',
        [theme.breakpoints.down('xs')]: {
            padding: '20px 20px',
        },

    },

    containerDetailProduct: {
        backgroundColor: '#FCFCFC',
        borderRadius: '6px',
        marginBottom: '15px'
    },

    detailProduct: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        [theme.breakpoints.down('xs')]: {
            flexDirection: 'column',
            minHeight: '78rem',
        },
    },

    detailImg: {
        height: '32rem',
        maxWidth: '30rem',
        padding: '1.5rem',
        [theme.breakpoints.down('xs')]: {
            height: '32rem',
            width: '30rem',
        },
    },

    cardDetailContent: {
        padding: 0,
    },

    detailProductData: {
        height: '32rem',
        padding: '1.5rem',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',

    },

    cardDetailIcons: {
        display: 'flex',
        justifyContent: 'flex-start',
        height: '1.8rem'
    },

    detailQuantidade: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: theme.spacing(2.5),
        width: '120px',
        backgroundColor: '#F4F4F4',
        borderRadius: '6px',
    },

    detailTextField: {
        width: '150px',
        backgroundColor: '#F4F4F4',
        borderRadius: '6px',
    },

    detailBtn: {
        marginTop: theme.spacing(2),
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        gap: '24px',
        [theme.breakpoints.down('xs')]: {
            flexDirection: 'column',
            justifyContent: 'flex-start',
            marginTop: theme.spacing(3),
            alignItems: 'normal',
            padding: '0 15px 15px 0'
        },
    },

    detailIcone: {
        backgroundColor: '#FCFCFC',
        color: '#B7005C',
        padding: theme.spacing(1, 2),
        border: '1px solid #B7005C',
        borderRadius: '24px',
    },

    detailSubmit: {
        padding: theme.spacing(1, 2),
        borderRadius: '24px',
        color: "#F3F3F3",
    },

    containerDetailDescription: {
        width: '100%',
        height: '100%',
        backgroundColor: '#FCFCFC',
        borderRadius: '6px',
    },

    detailProductDescription: {
        padding: '1.5rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '10px'
    },

    containerOtherProducts: {
        width: '100%',
        height: '100%',
        backgroundColor: 'transparent',
        boxShadow: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',

    },

    detailOtherProduct: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingTop: '15px',
        [theme.breakpoints.down('sm')]: {
            flexDirection: 'column',
        },
    },

}));
