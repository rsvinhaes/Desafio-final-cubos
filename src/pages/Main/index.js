import { Button, Grid, Typography } from '@material-ui/core';
import AddIcon from '@mui/icons-material/Add';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../componentes/Header/index';
import Table from '../../componentes/Table/index';
import useGlobalContext from '../../hooks/useGlobalContext';
import api from '../../services/api';
import { useStyles } from './style';
import './style.css';

function Main() {
    const { token, setUserProduct } = useGlobalContext()
    const navigate = useNavigate()
    const classes = useStyles();

   const handleGetUserProduct = async () => {
        try {

            const response = await api.get('/produto', {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            setUserProduct(response.data)

        } catch (error) {
            const erro = error.response.data.mensagem
            return alert(erro)
        }
    }

    useEffect(() => {
        handleGetUserProduct()

    }, // eslint-disable-next-line react-hooks/exhaustive-deps 
        []);


    return (
        <Grid className={classes.containerMain} >

            <Header />
            <Grid className={classes.containerPageMain}>
                <Grid className={classes.pageMain}>
                    <Grid className={classes.pageMainData}>
                        <Typography variant='h4' color='textPrimary' >
                            Meus Produtos
                        </Typography>
                        <Button
                            type="submit"
                            variant="contained"
                            color='primary'
                            className={classes.btnPageMain}
                            startIcon={<AddIcon />}
                            onClick={() => navigate('/AddProduct')}
                        >
                            Criar anúncio
                        </Button>
                    </Grid>
                    <Grid>
                        <Table />
                    </Grid>
                </Grid>
            </Grid>
        </Grid>


    );
}

export default Main;
