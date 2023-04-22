import { MantineThemeOverride, MantineTheme } from '@mantine/core';

export const theme: MantineThemeOverride = {
  fontFamily: 'Roboto',
  colors: {
    customGray: [
      '#dddddd',
      '#cccccc',
      '#999999',
      '#777777',
      '#555555',
      '#555555',
      '#555555',
      '#555555',
      '#555555',
      '#555555',
    ],
    brand: [
      '#eff6fe',
      '#e1effe',
      '#cae0fb',
      '#a9caf8',
      '#87abf2',
      '#7695ec',
      '#4e69dd',
      '#3f55c3',
      '#35479e',
      '#32417d',
    ],
    success: [
      '#47B960',
      '#47B960',
      '#47B960',
      '#47B960',
      '#47B960',
      '#47B960',
      '#47B960',
      '#47B960',
      '#47B960',
      '#47B960',
    ],
    error: [
      '#FF5151',
      '#FF5151',
      '#FF5151',
      '#FF5151',
      '#FF5151',
      '#FF5151',
      '#FF5151',
      '#FF5151',
      '#FF5151',
      '#FF5151',
    ],
  },
  primaryColor: 'brand',
  primaryShade: 5,
  globalStyles: (theme: MantineTheme) => ({
    body: {
      background: theme.colors.customGray[0],
      color: '#000000',
    },
  }),
  components: {
    Input: {
      defaultProps: (theme) => ({
        sx: {
          '& input': {
            borderColor: theme.colors.customGray[3],
            '&::placeholder': {
              color: theme.colors.customGray[1],
            },
          },
        },
      }),
    },
    TextInput: {
      defaultProps: {
        labelProps: {
          sx: {
            fontWeight: 400,
            color: '#000000',
            marginBottom: 8,
            fontSize: '1rem',
          },
        },
      },
    },
    Button: {
      defaultProps: {
        sx: {
          fontSize: '1rem',
        },
      },
    },
  },
};
