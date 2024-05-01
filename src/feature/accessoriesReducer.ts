import { TProduct } from '@/modules/shared/ProductItem/products';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IInitAccessoriesState {
  accessories: TProduct[];
  isLoadingAccessories: boolean;
  isErrorAccessories: boolean;
}

const initAccessoriesState: IInitAccessoriesState = {
  accessories: [],
  isErrorAccessories: false,
  isLoadingAccessories: false,
};

const accessoriesSlice = createSlice({
  name: 'accessories',
  initialState: initAccessoriesState,
  reducers: {
    setAccessories: (state, action: PayloadAction<TProduct[]>) => {
      state.accessories = action.payload;
    },
    setLoadingAccessories: (state, action: PayloadAction<boolean>) => {
      state.isLoadingAccessories = action.payload;
    },
    setErrorAccessories: (state, action: PayloadAction<boolean>) => {
      state.isErrorAccessories = action.payload;
    },
  },
});

export const { setAccessories, setLoadingAccessories, setErrorAccessories } = accessoriesSlice.actions;
export default accessoriesSlice.reducer;
