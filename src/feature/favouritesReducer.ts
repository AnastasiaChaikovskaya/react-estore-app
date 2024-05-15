import { TProduct } from '@/modules/shared/ProductItem/products';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface IFavoritesState {
  favorites: TProduct[];
}

const favoriteStorage = localStorage.getItem('favorite');

const initFavoritesState: IFavoritesState = {
  favorites: favoriteStorage ? JSON.parse(favoriteStorage) : [],
};

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: initFavoritesState,
  reducers: {
    addFavorite: (state, action: PayloadAction<TProduct>) => {
      state.favorites.push(action.payload);

      localStorage.setItem('favorite', JSON.stringify(state.favorites));
    },

    removeFavorite: (state, action: PayloadAction<string>) => {
      state.favorites = state.favorites.filter((item) => item.itemId !== action.payload);

      localStorage.setItem('favorite', JSON.stringify(state.favorites));
    },
  },
});

export const { addFavorite, removeFavorite } = favoritesSlice.actions;
export default favoritesSlice.reducer;
