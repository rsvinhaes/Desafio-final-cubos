import DeleteIcon from '@mui/icons-material/DeleteForever';
import EditIcon from '@mui/icons-material/Edit';
import { Grid, Typography, CardMedia, IconButton } from '@material-ui/core';
import Empty from '../../assets/empty.svg'
import { useStyles } from './styles';
import './styles.css';
// import Confirm from '../Confirm';
import { formatMoney } from '../../utils/formaters';
import { useEffect } from 'react';
import api from '../../services/api';
import useGlobalContext from '../../hooks/useGlobalContext';


export default function Table() {
    const { userProduct, token, setUserProduct } = useGlobalContext()
    const classes = useStyles();
   

    async function handleDeleteproduct(id) {
        try {

            const response = await api.delete(`/produtos/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });    
            console.log(response)
            
        } catch (error) {
            const erro = error.response.data.mensagem
            return alert(erro)
        }
        
    }

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
     [handleDeleteproduct])

    // async function handleModalEdit(id) {
    //     setModalEdit(true)
    //     setEditId(id)
    // }
   

    return (
        <Grid className={classes.containerTable}>
            <Grid className={classes.tableHead}>

                <Grid item xs={1} >

                </Grid>
                <Grid item xs={4} >
                    <Typography variant='subtitle1'>Nome</Typography>
                </Grid>
                <Grid item xs={2} >
                    <Typography variant='subtitle1'>Estoque</Typography>
                </Grid>
                <Grid item xs={2} >
                    <Typography variant='subtitle1'>Vendidos</Typography>
                </Grid>
                <Grid item xs={2} >
                    <Typography variant='subtitle1'>Valor</Typography>
                </Grid>
                <Grid item xs={1} >

                </Grid>
            </Grid>

            <Grid className='table-body'>
                {userProduct.length > 0 ?
                    userProduct.map((product) => (
                        <Grid className='table-row' key={product.id}>
                            <Grid item xs={1} >
                                <CardMedia className={classes.imgPageMain}
                                    component="img"
                                    image={product.foto_url}
                                    alt={product.titulo}
                                />
                            </Grid>

                            <Grid item xs={4}>
                                <Typography variant='body2' color='textSecondary' >
                                    {product.titulo}
                                </Typography>
                            </Grid>

                            <Grid item xs={2}>
                                <Typography variant='body2' color='textSecondary'>
                                    {product.quantidade}
                                </Typography>
                            </Grid>

                            <Grid item xs={2}>
                                <Typography variant='body2' color='textSecondary'>
                                    {(product.quantidade) - 2}
                                </Typography>
                            </Grid>

                            <Grid item xs={2}>
                                <Typography variant='body2' color='textSecondary'>
                                    {formatMoney(product.valor)}
                                </Typography>
                            </Grid>

                            <Grid item xs={1}>
                                <IconButton
                               
                                >
                                    <EditIcon />
                                </IconButton>
                                <IconButton
                                onClick={() => handleDeleteproduct(product.id)}
                                >
                                    <DeleteIcon />
                                </IconButton>
                            </Grid>

                            {/* <Confirm
                            open={openConfirm && transact.id === currentItem.id}
                            handleConfirm={handleDeleteItem}
                            handleClose={() => setOpenConfirm(false)}
                        /> */}
                        </Grid>
                    )) :
                    <Grid >
                        <CardMedia className={classes.imgEmptyMain}
                            component="img"
                            image={Empty}
                        />
                    </Grid>
                }
            </Grid>
        </Grid>

    )
}

