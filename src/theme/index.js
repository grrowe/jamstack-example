import {
  extendTheme,
  theme as base,
  withDefaultColorScheme,
  withDefaultVariant
} from '@chakra-ui/react';

import { mode } from '@chakra-ui/theme-tools';

const inputSelectStyles = {
  variants: {
    filled: {
      field: {
        _focus: {
          borderColor: 'brand.500'
        }
      }
    }
  },
  sizes: {
    md: {
      field: {
        borderRadius: 'none'
      }
    }
  }
};

const brandRing = {
  _focus: {
    ring: 2,
    ringColor: 'brand.500'
  }
};

const checkboxStyles = {
  baseStyle: {
    control: {
      borderRadius: 'none',
      ...brandRing
    }
  }
};

const theme = extendTheme(
  {
    colors: {
      brand: {
        50: '#f5fee5',
        100: '#CAF0F8',
        200: '#ADE8F4',
        300: '#90E0EF',
        400: '#48CAE4',
        500: '#00B4D8',
        600: '#0096C7',
        700: '#0077B6',
        800: '#023E8A',
        900: '#03045E'
      }
    },
    fonts: {
      heading: `Montserrat, ${base.fonts?.heading}`,
      body: `Inter, ${base.fonts?.body}`
    },
    components: {
      Input: { ...inputSelectStyles },
      Select: { ...inputSelectStyles },
      Checkbox: {
        ...checkboxStyles
      },
      Button: {
        variants: {
          primary: (props) => ({
            rounded: 'none',
            ...brandRing,
            color: mode('white', 'gray.800')(props),
            backgroundColor: mode('brand.500', 'brand.200')(props),
            _hover: {
              backgroundColor: mode('brand.600', 'brand.300')(props)
            },
            _active: {
              backgroundColor: mode('brand.700', 'brand.400')(props)
            }
          })
        }
      }
    }
  },
  withDefaultColorScheme({
    colorScheme: 'brand',
    components: ['Checkbox']
  }),
  withDefaultVariant({
    variant: 'filled',
    components: ['Input', 'Select']
  })
);

export default theme;
