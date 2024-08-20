import React from 'react';
import type { Preview } from "@storybook/react";
import '../lib/index.css';

import { withThemeByClassName } from "@storybook/addon-themes";
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'


const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },

  decorators: [
    withThemeByClassName({
      themes: {
        // nameOfTheme: 'classNameForTheme',
        light: '',
        dark: 'dark',
      },
      defaultTheme: 'light',
    }),
    (Story) => (
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Story />
      </LocalizationProvider>
    ),
  ]
};

export default preview;
