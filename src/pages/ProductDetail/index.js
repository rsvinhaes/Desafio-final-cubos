import { CardActionArea, Container, Grid } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import CreditCardIcon from '@material-ui/icons/CreditCard';
import CarrinhoIcon from '@material-ui/icons/LocalGroceryStore';
import AddIcon from '@mui/icons-material/Add';
import PixIcon from '@mui/icons-material/PixOutlined';
import RemoveIcon from '@mui/icons-material/Remove';
import { ReactComponent as IconBarcode } from '../../assets/barcode.svg';
import Header from '../../componentes/Header/index';
import ProductCard from '../../componentes/ProductCard/index';
import useGlobalContext from '../../hooks/useGlobalContext';
import { formatMoney } from '../../utils/formaters';
import { useStyles } from './style';
import './style.css';
import './style.js';

import Button from '@material-ui/core/Button';
import { useEffect, useState } from 'react';



function ProductDetail() {
    const [contador, setContador] = useState(1)
    const classes = useStyles();
    const { detailProduct, products } = useGlobalContext()
    const [arrayOtherProducts, setArrayOtherProducts] = useState([])


    function otherProducts() {
        const arrayProductsLength = []
        const arrayProducts = []

        for (let i = 0; i < 4; i++) {
            arrayProductsLength.push(Math.floor(Math.random() * products.length + 1))
        }

        arrayProductsLength.forEach(element => products.filter(product => {
            if (product.id === element) { arrayProducts.push(product) }
            return product
        }))

        setArrayOtherProducts(arrayProducts)
    }

    useEffect(() => {
        otherProducts()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


    return (
        <>
            <Header />
            <Container className={classes.containerPageDetailProduct}>
                <Grid>
                    <Card className={classes.containerDetailProduct}>
                        <CardActionArea className={classes.detailProduct} >
                            <Grid item xs={12} sm={4} >
                                <div>
                                    <CardMedia className={classes.detailImg}
                                        component="img"
                                        image={detailProduct.foto_url}
                                        alt={detailProduct.titulo}
                                    />
                                </div>
                            </Grid>

                            <Grid item xs={12} sm={12}>
                                <div className={classes.detailProductData} >
                                    <CardContent className={classes.cardDetailContent} >
                                        <Typography variant='subtitle2' color='primaryText' >
                                            {detailProduct.titulo}{' '}- Produto Original C/ Nota Fiscal
                                        </Typography>
                                    </CardContent>

                                    <CardContent className={classes.cardDetailContent} >
                                        <Typography variant='body2' style={{ color: '#858585', paddingBottom: '12px' }} >
                                            Vendido e entregue por | <span style={{ color: '#383842' }} >Market Cubos</span>
                                        </Typography>
                                    </CardContent>

                                    <CardContent className={classes.cardDetailContent} >
                                        <Typography variant='h3' style={{ color: '#D10070' }} >
                                            {formatMoney(detailProduct.valor)}
                                        </Typography>
                                    </CardContent>

                                    <CardContent className={classes.cardDetailContent} >
                                        <Typography variant='button' color='secondary'>
                                            Formas de pagamento
                                        </Typography>
                                    </CardContent>

                                    <div className={classes.cardDetailIcons}>
                                        <IconButton>
                                            < IconBarcode />
                                        </IconButton>
                                        <IconButton
                                        >
                                            <CreditCardIcon />
                                        </IconButton>
                                        <IconButton>
                                            <PixIcon />
                                        </IconButton>
                                    </div>
                                    <CardContent className={classes.cardDetailContent} >
                                        <Typography variant='button' color='secondary' >
                                            Quantidade
                                        </Typography>
                                    </CardContent>
                                    <div className={classes.detailQuantidade}>
                                        <IconButton color='primary' onClick={() => setContador(contador - 1)} >
                                            <RemoveIcon fontSize='large' />
                                        </IconButton>
                                        <Typography style={{ padding: '8px' }} >
                                            {contador}
                                        </Typography>
                                        <IconButton color='primary' onClick={() => setContador(contador + 1)}>
                                            <AddIcon fontSize='large' />
                                        </IconButton>

                                    </div>
                                    <CardContent className={classes.cardDetailContent} >
                                        <Typography variant='button' color='secondary' >
                                            Calcular frete e prazo
                                        </Typography>
                                    </CardContent>
                                    <div>
                                        <TextField className={classes.detailTextField}
                                            variant="outlined"
                                            required
                                            id="cep"
                                            name="cep"
                                            placeholder='Digite o CEP'
                                            size='small'
                                        />
                                    </div>
                                    <div className={classes.detailBtn}>
                                        <Button
                                            type="submit"
                                            variant="text"
                                            className={classes.detailIcone}
                                            startIcon={<CarrinhoIcon />}
                                        >
                                            Adicionar ao carrinho
                                        </Button>
                                        <Button
                                            type="submit"
                                            variant="contained"
                                            color="primary"
                                            className={classes.detailSubmit}
                                        >
                                            Comprar agora
                                        </Button>
                                    </div>
                                </div>
                            </Grid>

                        </CardActionArea>
                    </Card >
                </Grid>

                <Grid>
                    <Card className={classes.containerDetailDescription}>
                        <div className={classes.detailProductDescription} >
                            <CardContent className={classes.cardDetailContent}>
                                <Typography variant='subtitle2' color='primaryText' >
                                    Descrição do produto
                                </Typography>
                            </CardContent>

                            <CardContent className={classes.cardDetailContent}>
                                <Typography variant='body2' color='secondary' >
                                    {detailProduct.descricao}
                                </Typography>
                            </CardContent>

                        </div>
                    </Card >
                </Grid>

                <Typography variant='subtitle2' color='primaryText' style={{ paddingTop: '15px' }} >
                    Outros produtos
                </Typography>


                <Grid >
                    <Card className={classes.containerOtherProducts}>
                        <CardActionArea className={classes.detailOtherProduct} >
                            {arrayOtherProducts.map((product) => (
                                <ProductCard
                                    key={product.id}
                                    item={product}
                                />
                            ))}
                        </CardActionArea>
                    </Card >
                </Grid>
            </Container>
        </>

    );
}

export default ProductDetail;
