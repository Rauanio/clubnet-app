import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Loader } from '@mantine/core';
import { routeConfig } from '../config/routeConfig';

export function AppRouter() {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        {Object.values(routeConfig).map((route) => (
          <Route
            key={route.path}
            path={route.path}
            element={<Suspense fallback={<Loader />}>{route.element}</Suspense>}
          />
        ))}
      </Routes>
    </Suspense>
  );
}
