import { configureStore } from '@reduxjs/toolkit'
import { rickMortySlice } from './sliceRickMorty'

export const store = configureStore({
  reducer: {
    rickMorty: rickMortySlice.reducer
  },
})