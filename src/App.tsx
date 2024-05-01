import React from 'react';
import './App.scss';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { PUBLIC_ROUTS } from '@/contstants/routs';
import MainLayout from '@/modules/shared/MainLayout';
import { AccessoriesPage, HomePage, PhonesPage, TabletsPage } from '@/pages/main';
import ProductPage from './pages/main/ProductPage';
import { store } from '@/store';
import { Provider } from 'react-redux';

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
        children: [
          {
            index: true,
            element: <PhonesPage />,
          },
          {
            path: ':itemId',
            element: <ProductPage />,
          },
        ],
      },
      {
        path: PUBLIC_ROUTS.TABLETS,
        children: [
          {
            index: true,
            element: <TabletsPage />,
          },
          {
            path: ':itemId',
            element: <ProductPage />,
          },
        ],
      },
      {
        path: PUBLIC_ROUTS.ACCESSORIES,
        children: [
          {
            index: true,
            element: <AccessoriesPage />,
          },
          {
            path: ':itemId',
            element: <ProductPage />,
          },
        ],
      },
    ],
  },
]);

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={routs} />
    </Provider>
  );
}

export default App;
