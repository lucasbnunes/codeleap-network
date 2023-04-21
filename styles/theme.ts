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
  globalStyles: (theme: MantineTheme) => ({
    body: {
      background: theme.colors.customGray[0],
    },
  }),
};