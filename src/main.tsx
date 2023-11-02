import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { MantineProvider } from '@mantine/core';
import App from './App.tsx';
import './config/i18n.ts';
import './api/firebase.ts';
import '@mantine/core/styles.css';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <MantineProvider>
      <Suspense fallback="...loading">
        <App />
      </Suspense>
    </MantineProvider>
  </React.StrictMode>
);
