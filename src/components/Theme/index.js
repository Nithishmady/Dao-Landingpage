import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';

let Theme = createTheme({

    palette: {
        primary: {
          light: '#8B93A7',
          main:  '#19233C',
          dark:  'black',
          paragraphColor: '#5F5F5F',
          sectioncolor:'#EFF2F7',
          lightblue:'#7073BE'
        },
        secondary: {
          light: '#ff7961',
          main: '#f44336',
          dark: '#19233C', //darkblue
          contrastText: '#000',
        },
    },
    spacing: [0, 5, 10, 15, 20, 25,50,100,110],
    breakpoints: {
      values: {
        xs: 370,
        sm: 600,
        md: 900,
        lg: 1200,
        xl: 1536,
      },
    },

})
export default Theme