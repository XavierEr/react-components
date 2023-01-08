//#region Library imports
import React, { StrictMode } from 'react';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
//#endregion

import './index.module.scss';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  viewport: {
    viewports: INITIAL_VIEWPORTS,
  }
}

export const decorators = [(Story) => <StrictMode><Story /></StrictMode>]