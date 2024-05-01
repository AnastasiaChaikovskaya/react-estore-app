import { TProductDetails } from '@/modules/shared/ProductItem/products';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IInitCurrentProductState {
  currentProduct: TProductDetails | null;
}

const initCurrentProductState: IInitCurrentProductState = {
  currentProduct: null,
};

const currentProduct = createSlice({
  name: 'currentProduct',
  initialState: initCurrentProductState,
  reducers: {
    setCurrentProduct: (state, action: PayloadAction<TProductDetails>) => {
      state.currentProduct = action.payload;
    },
    removeCurrentProduct: (state) => {
      state.currentProduct = null;
    },
  },
});

export const { setCurrentProduct, removeCurrentProduct } = currentProduct.actions;
export default currentProduct.reducer;
