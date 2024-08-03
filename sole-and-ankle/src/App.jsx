import React from 'react'
import { GlobalStyle } from './GlobalStyle'
import { ThemeProvider } from 'styled-components'
import Superheader from './components/Superheader/Superheader';

const theme = {
  primary: '#C5295D',
  secondary: '#6868D9',
  white: '#FFFFFF',
  'gray-900': '#313235',
  'gray-700': '#60666C',
  'gray-500': '#949A9C',
  'gray-300': '#C9CECF',
  'gray-100': '#F2F3F3'
};

// https://www.youtube.com/watch?v=FSCSdAlLsYM&list=PLC3y8-rFHvwgu-G08-7ovbN9EyhF_cltM

const App = () => (
  <ThemeProvider theme={theme}>
    <>
      <GlobalStyle />
      <Superheader />
    </>
  </ThemeProvider>
);

export default App;