import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import MainRoutes from './routes';
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider, createTheme } from '@material-ui/core';
import GlobalContextProvider from './context/GlobalContextProvider';

const theme = createTheme({

  palette: {
    primary: { main: '#B7005C' },
    secondary: { main: '#252531' },
    text: { primary: '#383842', secondary: '#191919' },

  },

  typography: {
    fontFamily: 'Public Sans',
    h1: { fontSize: '56px', fontWeight: 500 },
    h2: { fontSize: '40px', fontWeight: 700 },
    h3: { fontSize: '25px', fontWeight: 700 },
    h4: { fontSize: '24px', fontWeight: 600 },
    h5: { fontFamily: 'Montserrat', fontSize: '22px', fontWeight: 700 },
    h6: { fontSize: '20px', fontWeight: 600 },
    subtitle1: { fontSize: '20px', fontWeight: 500 },
    subtitle2: { fontSize: '16px', fontWeight: 600 },
    body: { fontSize: '16px', fontWeight: 500 },
    body1: { fontSize: '16px', fontWeight: 400 },
    body2: { fontSize: '14px', fontWeight: 400 },
    button: { fontSize: '14px', fontWeight: 600, textTransform: 'none' }
  },

});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <ThemeProvider theme={theme}>

    <React.StrictMode>
      <GlobalContextProvider>
        <BrowserRouter>
          <MainRoutes />
        </BrowserRouter>
      </GlobalContextProvider>
    </React.StrictMode>

  </ThemeProvider>
);
