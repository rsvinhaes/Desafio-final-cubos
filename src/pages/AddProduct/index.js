import { Button, Grid, InputLabel, TextField, Typography } from '@material-ui/core';
import { useEffect, useState } from 'react';
import Header from '../../componentes/Header/index';
import useGlobalContext from '../../hooks/useGlobalContext';
import api from '../../services/api';
import { useStyles } from './style';
import './style.css';


function AddProduct() {
    const { token } = useGlobalContext()
    const classes = useStyles();
    const [file, setFile] = useState('')
    const [titulo, setTitulo] = useState('')
    const [descricao, setDescricao] = useState('')
    const [quantidade, setQuantidade] = useState('')
    const [valor, setValor] = useState('')

    async function handleAddProduct(e) {
        e.preventDefault()
        const formData = new FormData()
        formData.append('foto', file)
        formData.append('titulo', titulo)
        formData.append('descricao', descricao)
        formData.append('valor', valor)
        formData.append('quantidade', quantidade)

        try {
            const response = await api.post('/produtos', formData, {
                headers: {

                    'Content-Type': 'multpart/form-data',
                    Authorization: `Bearer ${token}`
                }

            });
            console.log(response.data)

        } catch (error) {

            console.log(error)

        }
    }

    useEffect(() => {


    }, // eslint-disable-next-line react-hooks/exhaustive-deps 
        []);


    return (
        <Grid className={classes.containerMain} >

            <Header />
            <Grid className={classes.containerPageMain}>
                <Grid className={classes.pageMain}>
                    <Grid className={classes.pageMainData}>
                        <Typography variant='h4' color='textPrimary' >
                            Adcionar novo produto
                        </Typography>
                    </Grid>
                    <form className={classes.formAdd} noValidate >
                        <Grid >
                            <Grid item xs={9} className={classes.inputLarge} >
                                <InputLabel
                                    children='Título'
                                    shrink htmlFor="titulo"
                                />
                                <TextField className={classes.textAdd}
                                    placeholder='Nome do produto'
                                    variant="outlined"
                                    // required
                                    fullWidth
                                    id="titulo"
                                    autoFocus
                                    size='small'
                                    inputProps={{ maxLength: 200 }}
                                    value={titulo}
                                    onChange={(e) => setTitulo(e.target.value)}
                                />
                            </Grid>
                            <Grid item xs={9} className={classes.inputLarge}>
                                <InputLabel
                                    children='Descrição do Produto'
                                    shrink htmlFor="descrição"
                                />

                                <TextField className={classes.textAdd}
                                    variant="outlined"
                                    // required
                                    fullWidth
                                    id="descrição"
                                    placeholder='Ex.: Camiseta branca, Tamanho G'
                                    type="text"
                                    size='medium'
                                    inputProps={{ maxLength: 2000 }}
                                    value={descricao}
                                    onChange={(e) => setDescricao(e.target.value)}
                                />
                            </Grid>
                            <Grid item xs={3} className={classes.inputSmall} >
                                <Grid>
                                    <InputLabel
                                        children='Preço'
                                        shrink htmlFor="valor"
                                    />

                                    <TextField className={classes.textAdd}
                                        variant="outlined"
                                        // required
                                        fullWidth
                                        id="valor"
                                        placeholder='R$'
                                        type="text"
                                        size='small'
                                        value={valor}
                                        onChange={(e) => setValor(e.target.value)}
                                    />
                                </Grid>

                                <Grid>
                                    <InputLabel
                                        children='Estoque'
                                        shrink htmlFor="estoque"
                                    />

                                    <TextField className={classes.textAdd}
                                        variant="outlined"
                                        // required
                                        fullWidth
                                        id="estoque"
                                        placeholder='Ex: 10'
                                        type="text"
                                        size='small'
                                        value={quantidade}
                                        onChange={(e) => setQuantidade(e.target.value)}
                                    />
                                </Grid>
                            </Grid>
                            <Grid item xs={3} className={classes.inputFile} >
                                <InputLabel
                                    children='Adicionar foto'
                                    shrink htmlFor="file"
                                />

                                <TextField className={classes.textAdd}
                                    variant="outlined"
                                    required
                                    fullWidth
                                    type="file"
                                    id="file"
                                    size='small'
                                    onChange={(e) => setFile(e.target.files[0])}
                                />
                            </Grid>
                        </Grid>
                        <Grid className={classes.btnAdd} >

                            <Button
                                type="submit"
                                variant="contained"
                                color="primary"
                                disabled={false}
                                className={classes.submitAdd}
                                onClick={handleAddProduct}
                            >
                                Publicar anúncio
                            </Button>
                            <Button
                                type="submit"
                                variant="contained"
                                color="primary"
                                className={classes.submitCanceled}
                            >
                                Cancelar
                            </Button>
                        </Grid>

                    </form>

                </Grid>

            </Grid >
        </Grid >


    );
}

export default AddProduct;
