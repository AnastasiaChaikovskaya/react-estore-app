import { TProductDetails } from '@/modules/shared/ProductItem/products';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IInitCurrentProductState {
  currentProduct: TProductDetails | null;
  loading: boolean;
  error: boolean;
}

const initCurrentProductState: IInitCurrentProductState = {
  currentProduct: null,
  loading: false,
  error: false,
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
    setLoadingCurrentProduct: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setErrorCurrentProduct: (state, action: PayloadAction<boolean>) => {
      state.error = action.payload;
    },
  },
});

export const { setCurrentProduct, removeCurrentProduct, setErrorCurrentProduct, setLoadingCurrentProduct } =
  currentProduct.actions;
export default currentProduct.reducer;
