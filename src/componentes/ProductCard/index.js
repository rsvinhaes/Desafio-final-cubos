import { CardActionArea } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { useStyles } from './style';
import { formatMoney } from '../../utils/formaters'
import './style.css';
import { useNavigate } from 'react-router-dom';
import useGlobalContext from '../../hooks/useGlobalContext'


export default function ProductCard({ item }) {

    const navigate = useNavigate()
    const classes = useStyles();
    const { setDetailProduct } = useGlobalContext()

    function handleDetailProduct() {
        setDetailProduct(item)
        navigate('/ProductDetail')
    }

    return (
        <Card className={classes.containerProductCard} onClick={handleDetailProduct}>
            <CardActionArea className={classes.productCard} >
                <CardMedia
                    component="img"
                    image={item.foto_url}
                    alt={item.titulo}
                />
                <CardContent className={classes.cardContent} >
                    <Typography className={classes.title} >
                        {item.titulo}
                    </Typography>
                </CardContent>

                <CardContent className={classes.cardContent} >
                    <Typography className={classes.value} >
                        {formatMoney(item.valor)}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card >
    );
}