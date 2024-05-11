import { TCartProduct, TProduct } from '@/modules/shared/ProductItem/products';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface ICartStore {
  cartProducts: TCartProduct[];
}

const cartStore = localStorage.getItem('cart');

const initCartStore: ICartStore = {
  cartProducts: cartStore ? JSON.parse(cartStore) : [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState: initCartStore,
  reducers: {
    addToCart: (store, action: PayloadAction<TProduct>) => {
      const amount = action.payload.price ? action.payload.price : action.payload.fullPrice;
      store.cartProducts.push({
        ...action.payload,
        count: 1,
        totalAmount: amount,
      });

      localStorage.setItem('cart', JSON.stringify(store.cartProducts));
    },

    incrementCount: (state, action: PayloadAction<TCartProduct>) => {
      const amount = action.payload.price ? action.payload.price : action.payload.fullPrice;
      state.cartProducts = state.cartProducts.map((product) => {
        if (product.itemId === action.payload.itemId) {
          const newCount = product.count + 1;
          return { ...product, count: newCount, totalAmount: amount * newCount };
        }

        return product;
      });
    },

    decrementCount: (state, action: PayloadAction<TCartProduct>) => {
      state.cartProducts = state.cartProducts.map((product) => {
        const amount = action.payload.price ? action.payload.price : action.payload.fullPrice;
        if (product.itemId === action.payload.itemId) {
          const newCount = product.count - 1;
          return { ...product, count: newCount, totalAmount: amount * newCount };
        }

        return product;
      });
    },

    removeFromCart: (store, action: PayloadAction<string>) => {
      store.cartProducts = store.cartProducts.filter((item) => item.itemId !== action.payload);

      localStorage.setItem('cart', JSON.stringify(store.cartProducts));
    },
  },
});

export const { incrementCount, removeFromCart, addToCart, decrementCount } = cartSlice.actions;
export default cartSlice.reducer;
