import { TProduct } from '@/modules/shared/ProductItem/products';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IInitStateTablets {
  tablets: TProduct[];
  isLoadingTablets: boolean;
  isErrorTablets: boolean;
}

const initStateTablets: IInitStateTablets = {
  tablets: [],
  isLoadingTablets: false,
  isErrorTablets: false,
};

const tabletsSlice = createSlice({
  name: 'tablets',
  initialState: initStateTablets,
  reducers: {
    setTablets: (state, action: PayloadAction<TProduct[]>) => {
      state.tablets = action.payload;
    },
    setLoadingTablets: (state, action: PayloadAction<boolean>) => {
      state.isLoadingTablets = action.payload;
    },
    setErrorTablets: (state, action: PayloadAction<boolean>) => {
      state.isErrorTablets = action.payload;
    },
  },
});

export const { setTablets, setLoadingTablets, setErrorTablets } = tabletsSlice.actions;
export default tabletsSlice.reducer;
