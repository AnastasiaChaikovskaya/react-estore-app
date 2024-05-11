import { TProduct } from '@/modules/shared/ProductItem/products';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface IAlsoLikeState {
  alsoLike: TProduct[];
}

const alsoLikeStorage = localStorage.getItem('alsoLikeItems');

const initAlsoLikeState: IAlsoLikeState = {
  alsoLike: alsoLikeStorage ? JSON.parse(alsoLikeStorage) : [],
};

const alsoLikeSlice = createSlice({
  name: 'alsoLike',
  initialState: initAlsoLikeState,
  reducers: {
    addAlsoLike: (state, action: PayloadAction<TProduct>) => {
      const existingProduct = state.alsoLike.find((product) => product.itemId === action.payload.itemId);

      if (!existingProduct) {
        state.alsoLike.unshift(action.payload);
      }
      localStorage.setItem('alsoLikeItems', JSON.stringify(state.alsoLike));
    },
  },
});

export const { addAlsoLike } = alsoLikeSlice.actions;
export default alsoLikeSlice.reducer;
