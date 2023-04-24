import { CssBaseline, ThemeProvider } from '@mui/material';
import ToastNotification from 'context/ToastNotification/ToastNotification';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import theme from 'theme';
import App from './App';
import "./index.css";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <ThemeProvider theme={theme}>
    <ToastNotification>
      <BrowserRouter>
        <CssBaseline />
        <App />
      </BrowserRouter>
    </ToastNotification>
  </ThemeProvider>
);
