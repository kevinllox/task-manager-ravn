import React from 'react';
import ReactDOM from 'react-dom/client';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

const customTheme = extendTheme({
  colors: {
    neutral: {
      1: '#FFFF',
      2: '#94979A',
      3: '#393D41',
      4: '#2C2F33',
      5: '#222528',
    },
    primary: {
      1: '#F4CCC8',
      2: '#EBA59E',
      3: '#E27D73',
      4: '#DA584B',
    },
    secondary: {
      1: '#C8E1BC',
      2: '#AAD199',
      3: '#8DC275',
      4: '#70B252',
    },
    tertiary: {
      1: '#F9EED7',
      2: '#F2DAAB',
      3: '#EBC77F',
      4: '#E5B454',
    },
  },
});
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ChakraProvider theme={customTheme}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>
);
