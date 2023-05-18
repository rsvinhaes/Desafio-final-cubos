import { Box, InputLabel } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from '../../assets/logo.svg';
import { useStyles } from '../../componentes/styles/signIn-signUp/style';
import '../../index.css';
import api from '../../services/api';
import './style.css';


export default function SignUp() {
    const navigate = useNavigate()
    const classes = useStyles();
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [confirmaSenha, setConfirmaSenha] = useState('')

    async function handleSubmit(event) {
        event.preventDefault();

        try {
            if (!email || !senha || !nome || !confirmaSenha) {
                return
            }

            if (senha !== confirmaSenha) {
                return
            }

            const response = await api.post('/usuarios', {
                nome,
                email,
                senha

            });

            if (response) {
                navigate('/SignIn');
            }
        } catch (error) {

            return
        }
    }


    return (
        <div className='containerLogin'>
            <CssBaseline />
            <Box className={classes.box} >
                <Avatar
                    className={classes.avatar}
                    src={Logo}
                    variant='rounded'
                >
                </Avatar>

                <Typography variant="h5" color='secondary'>
                    Market Cubos
                </Typography>

                <Typography style={{ paddingTop: "24px" }} variant="h6" color='primaryText' >
                    Cadastre-se
                </Typography>

                <form onSubmit={handleSubmit} className={classes.form} noValidate >
                    <Grid >
                        <Grid item xs={12}>
                            <InputLabel className={classes.label}
                                children='Nome da loja'
                                shrink htmlFor="nome"
                            />
                            <TextField className={classes.text}
                                autoComplete="name"
                                name="nome"
                                variant="outlined"
                                required
                                fullWidth
                                id="nome"
                                autoFocus
                                size='small'
                                value={nome}
                                onChange={(e) => setNome(e.target.value)}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <InputLabel className={classes.label}
                                children='E-mail'
                                shrink htmlFor="email"
                            />

                            <TextField className={classes.text}
                                variant="outlined"
                                required
                                fullWidth
                                id="email"
                                name="email"
                                type="email"
                                autoComplete="email"
                                size='small'
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <InputLabel className={classes.label}
                                children='Senha'
                                shrink htmlFor="senha"
                            />

                            <TextField className={classes.text}
                                variant="outlined"
                                required
                                fullWidth
                                id="senha"
                                name="senha"
                                type="password"
                                autoComplete="senha"
                                size='small'
                                value={senha}
                                onChange={(e) => setSenha(e.target.value)}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <InputLabel className={classes.label}
                                children='Confirme sua senha'
                                shrink htmlFor="Confirme sua senha"
                            />

                            <TextField className={classes.text}
                                variant="outlined"
                                required
                                fullWidth
                                name="Confirme sua Senha"
                                type="password"
                                id="Confirme sua Senha"
                                autoComplete="confirmaSenha"
                                size='small'
                                value={confirmaSenha}
                                onChange={(e) => setConfirmaSenha(e.target.value)}
                            />
                        </Grid>
                    </Grid>

                    <Typography style={{ padding: "24px 15px 0" }} color='secondaryText' variant='body2' align='center'>
                        Ao criar uma conta, você concorda com a nossa
                        {' '}<span style={{ cursor: "pointer", color: '#D10070' }}>
                            Política de Privacidade
                        </span>{' '}
                        e
                        {' '}<span style={{ cursor: "pointer", color: '#D10070' }}>Termos de serviço</span>
                    </Typography>

                    <Grid container justifyContent="center">

                        <Button
                            type="submit"
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                        >
                            Criar Conta
                        </Button>
                    </Grid>

                    <Typography style={{ paddingTop: "24px" }} color='secondaryText' variant='body1' align='center'>
                        Já tem uma conta?
                        {' '}<span style={{ cursor: "pointer", color: '#B7005C' }} onClick={() => navigate('/signIn')} >
                            Fazer login
                        </span>
                    </Typography>

                </form>
            </Box>

        </div>

    );
}