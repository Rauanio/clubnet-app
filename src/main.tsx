import { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { StoreProvider } from 'app/providers/StoreProvider';
import { BrowserRouter } from 'react-router-dom';
import { Loader, MantineProvider } from '@mantine/core';
import { Notifications } from '@mantine/notifications';
import App from './app/App.tsx';
import './shared/config/i18n.ts';
import './shared/api/firebase.ts';
import '@mantine/core/styles.css';
import 'app/styles/index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <MantineProvider>
      <StoreProvider>
        <Suspense fallback={<Loader />}>
          <Notifications />
          <App />
        </Suspense>
      </StoreProvider>
    </MantineProvider>
  </BrowserRouter>
);
