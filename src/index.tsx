//#region Library imports
import React from 'react';
import { createRoot } from 'react-dom/client';
//#endregion

//#region React Component imports
import App from './App';
//#endregion

import './styles/index.module.scss';

const container = document.getElementById('app');
const root = createRoot(container!);
root.render(<App />);