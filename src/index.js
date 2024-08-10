import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { useTranslation } from 'react-i18next';
import App from './App';
import './i18n';

const Root = () => {
  const { i18n } = useTranslation();

  const theme = createTheme({
    typography: {
      fontFamily: i18n.language === 'ar' 
        ? '"FS Albert Arabic", Arial, sans-serif' 
        : '"Inter", sans-serif',
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  );
};

ReactDOM.render(<Root />, document.getElementById('root'));
