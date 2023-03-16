import { extendTheme } from '@chakra-ui/react';

const colors = {
  brand: {
    900: '#13293D',
    800: '#006496',
    700: '#247BA0',
    600: '#1B98E0',
    500: '#E8F1F2',
  },
  pastel: {
    red: '#ED474A',
    yellow: '#F2C94C',
    green: '#27AE60',
  },
  rgba: {
    black: 'rgba(0, 0, 0, 0.7)',
  },
  fontSizes: {
    xs: '0.75rem',
    sm: '0.875rem',
    md: '1rem',
    lg: '1.125rem',
    xl: '1.25rem',
    '2xl': '1.5rem',
    '3xl': '1.875rem',
    '4xl': '2.25rem',
    '5xl': '3rem',
    '6xl': '3.75rem',
    '7xl': '4.5rem',
    '8xl': '6rem',
    '9xl': '8rem',
  },
};

const fonts = {
  heading: `'Poppins', 'sans-serif'`,
  body: `'Poppins', 'sans-serif'`,
};

export const ScrollbarStyle = {
  '::-webkit-scrollbar': {
    width: '0.6rem',
    height: '0.6rem',
    marginLeft: '3rem',
  },
  '::-webkit-scrollbar-track': {
    border: 'solid 1px transparent',
    borderRadius: '2.4rem',
  },
  '::-webkit-scrollbar-thumb': {
    boxShadow: 'inset 0 0 10px 10px brand.400',
    background: 'brand.700',
    borderRadius: '2.4rem',
  },
};

export const theme = extendTheme({ colors, fonts });
