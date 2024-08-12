import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './i18n';
import { ThemeProvider, CssBaseline, createTheme } from '@mui/material';
import { BrowserRouter } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

// Suppress ResizeObserver loop error
const resizeObserverLoopErr = () => {
  const resizeObserverErrDiv = document.createElement('div');
  resizeObserverErrDiv.id = 'resizeObserverErrDiv';
  resizeObserverErrDiv.style.display = 'none';
  document.body.appendChild(resizeObserverErrDiv);
  const resizeObserverErr = () => {
    if (document.getElementById('resizeObserverErrDiv')) {
      document.body.removeChild(resizeObserverErrDiv);
    }
  };
  window.addEventListener('error', (event) => {
    if (event.message === 'ResizeObserver loop completed with undelivered notifications.') {
      event.stopImmediatePropagation();
      resizeObserverErr();
    }
  });
};

resizeObserverLoopErr();

const Root = () => {
  const { i18n } = useTranslation();

  const theme = createTheme({
    typography: {
      fontFamily: i18n.language === 'ar' 
        ? '"Cairo", Arial, sans-serif' 
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