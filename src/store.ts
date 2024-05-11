import { configureStore } from '@reduxjs/toolkit';
import phonesReducer from './feature/phonesReducer';
import tabletsReducer from './feature/tabletsReducer';
import accessoriesReducer from './feature/accessoriesReducer';
import currentProduct from './feature/currentProduct';
import alsoLikeReducer from './feature/alsoLikeReducer';
import favouritesReducer from './feature/favouritesReducer';
import cartReducer from './feature/cartReducer';

export const store = configureStore({
  reducer: {
    phones: phonesReducer,
    tablets: tabletsReducer,
    accessories: accessoriesReducer,
    currentProduct: currentProduct,
    alsoLike: alsoLikeReducer,
    favorites: favouritesReducer,
    cart: cartReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
