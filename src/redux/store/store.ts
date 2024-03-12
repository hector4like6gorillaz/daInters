import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import ejemploSlice from "../reducers/auth";

export const store = configureStore({
  reducer: {
    ejemplo: ejemploSlice,
    sabritas: ejemploSlice,
    galletas: ejemploSlice,
    refrescos: ejemploSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
