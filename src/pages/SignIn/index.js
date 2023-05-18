import { Box, InputLabel } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from '../../assets/logo.svg';
import { useStyles } from '../../componentes/styles/signIn-signUp/style';
import useGlobalContext from '../../hooks/useGlobalContext';
import api from '../../services/api';
import './styles.css';


export default function SignIn() {

  const { token, setToken, setUser } = useGlobalContext()
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')

  const classes = useStyles();
  async function handleSubmit(e) {
    e.preventDefault();

    try {

      if (!email || !senha) {
        return
      }

      const response = await api.post('/login', {
        email,
        senha
      });

      const { token, dadosUsuario } = response.data
      setToken(token)
      setUser(dadosUsuario)

      navigate('/Main')
      setEmail('')
      setSenha('')


    } catch (error) {
      const erro = error.response.data.mensagem
      return alert(erro)
    }
  }

  useEffect(() => {
    if (token) {
      navigate('/Main')
    }
  }, // eslint-disable-next-line react-hooks/exhaustive-deps
    [])

  return (
    <div className='containerLogin'>
      <CssBaseline />
      <Box className={classes.box} >
        <Avatar
          className={classes.avatar}
          src={Logo}
          variant='rounded'
        />

        <Typography variant="h5" color='secondary'>
          Market Cubos
        </Typography>

        <Typography style={{ paddingTop: "24px" }} variant="h6" color='primaryText' >
          Boas-vindas!
        </Typography>

        <Typography variant="body2" color='secondaryText' >
          Use seu e-mail e senha para acessar a conta
        </Typography>

        <form onSubmit={handleSubmit} className={classes.form} noValidate>
          <Grid container spacing={2}>
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
                autoComplete="email"
                autoFocus
                placeholder='exemplo@email.com'
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
                placeholder='insira sua senha'
                size='small'
                name="password"
                type="password"
                id="password"
                autoComplete="current-password"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
              />
            </Grid>

          </Grid>
          <Grid container justifyContent="center">
            <Button
              type="submit"
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Fazer login
            </Button>
          </Grid>
          <Typography style={{ padding: "24px 0" }} color='secondaryText' variant='body1' align='center'>
            Não possui conta?
            {' '}<span style={{ cursor: "pointer", color: '#B7005C' }} onClick={() => navigate('/signUp')} >
              Cadastrar
            </span>
          </Typography>
        </form>
      </Box>
    </div >
  );
}


