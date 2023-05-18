import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({

    containerHome: {
        backgroundColor: '#E5E5E5',
        minHeight: 'calc(100vh - 64px)',
        padding: '20px 64px',
        [theme.breakpoints.down('xs')]: {
            padding: '20px 20px',
        },
    },

    containerCard: {
        display: 'flex',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        flexWrap: 'wrap',
    }

}));
