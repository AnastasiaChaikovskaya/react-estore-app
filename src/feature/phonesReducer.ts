import { TProduct } from '@/modules/shared/ProductItem/products';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IInitialPhonesState {
  phones: TProduct[];
  isLoadingPhones: boolean;
  isErrorPhones: boolean;
}

const initialPhonesState: IInitialPhonesState = {
  phones: [],
  isLoadingPhones: false,
  isErrorPhones: false,
};

const phonesSlice = createSlice({
  name: 'phones',
  initialState: initialPhonesState,
  reducers: {
    setPhones: (state, action: PayloadAction<TProduct[]>) => {
      state.phones = action.payload;
    },
    setLoadingPhones: (state, action: PayloadAction<boolean>) => {
      state.isLoadingPhones = action.payload;
    },
    setErrorPhones: (state, action: PayloadAction<boolean>) => {
      state.isErrorPhones = action.payload;
    },
  },
});

export const { setErrorPhones, setLoadingPhones, setPhones } = phonesSlice.actions;
export default phonesSlice.reducer;
