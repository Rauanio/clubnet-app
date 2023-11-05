import { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { Loader, MantineProvider } from '@mantine/core';
import App from './app/App.tsx';
import './shared/config/i18n.ts';
import './shared/api/firebase.ts';
import '@mantine/core/styles.css';
import 'app/styles/index.scss';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <MantineProvider>
    <Suspense fallback={<Loader />}>
      <App />
    </Suspense>
  </MantineProvider>
);
