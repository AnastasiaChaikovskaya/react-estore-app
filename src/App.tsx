import React from 'react';
import './App.scss';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { PUBLIC_ROUTS } from '@/contstants/routs';
import MainLayout from '@/modules/shared/MainLayout';
import { AccessoriesPage, HomePage, PhonesPage, TabletsPage } from '@/pages/main';

const routs = createBrowserRouter([
  {
    path: PUBLIC_ROUTS.HOME,
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: PUBLIC_ROUTS.PHONES,
        element: <PhonesPage />,
      },
      {
        path: PUBLIC_ROUTS.TABLETS,
        element: <TabletsPage />,
      },
      {
        path: PUBLIC_ROUTS.ACCESSORIES,
        element: <AccessoriesPage />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={routs} />;
}

export default App;
