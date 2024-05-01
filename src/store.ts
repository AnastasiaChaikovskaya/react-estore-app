import { configureStore } from '@reduxjs/toolkit';
import phonesReducer from './feature/phonesReducer';
import tabletsReducer from './feature/tabletsReducer';
import accessoriesReducer from './feature/accessoriesReducer';

export const store = configureStore({
  reducer: {
    phones: phonesReducer,
    tablets: tabletsReducer,
    accessories: accessoriesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
