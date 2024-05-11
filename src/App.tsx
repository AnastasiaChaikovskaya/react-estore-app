import React from 'react';
import './App.scss';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { PUBLIC_ROUTS } from '@/contstants/routs';
import MainLayout from '@/modules/shared/MainLayout';
import { AccessoriesPage, HomePage, PhonesPage, TabletsPage } from '@/pages/main';
import ProductPage from './pages/main/ProductPage';
import { store } from '@/store';
import { Provider } from 'react-redux';
import FavoritePage from './pages/main/FavoritePage';
import CartPage from './pages/main/CartPage';

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
            element: <ProductPage category="phones" />,
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
            element: <ProductPage category="tablets" />,
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
            element: <ProductPage category="accessories" />,
          },
        ],
      },
      {
        path: '/favorites',
        element: <FavoritePage />,
      },
      {
        path: '/cart',
        element: <CartPage />,
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
