import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({

    containerMain: {
        [theme.breakpoints.down('xs')]: {
            width: '600px',
            minHeight: '100%'

        },
    },


    containerPageMain: {
        backgroundColor: '#E5E5E5',

        minHeight: 'calc(100vh - 64px)',
        display: 'flex',
        flexDirection: 'column',
        padding: '20px 64px',
        [theme.breakpoints.down('xs')]: {
            padding: '20px 20px',
            height: '100%'
        },
    },

    pageMain: {
        backgroundColor: '#FCFCFC',
        maxWidth: '100%',
        minHeight: '100%',
        padding: '10px 20px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        borderRadius: '6px',

    },

    pageMainData: {
        maxWidth: '100%',
        minHeight: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottom: '1px solid #E5E5E5',
        paddingBottom: '1.5rem'
    },

    btnPageMain: {
        borderRadius: theme.spacing(10),
        color: '#F3F3F3',
    }

}));