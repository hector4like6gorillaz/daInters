import { createSlice } from "@reduxjs/toolkit";

export interface AuthData {
  data: {
    success: boolean;
    token: string;
  };
  contador: number;
  contador1: number;
  contador2: number;
}

const initialState: AuthData = {
  data: {
    success: false,
    token: "",
  },
  contador: 10,
  contador1: 0,
  contador2: 0,
};

export const ejemploSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    aumentarContador: (state, action) => {
      state.contador = state.contador+ action.payload;
    },
    aumentarContadoren1: (state) => {
      state.contador = state.contador + 1;
    },
    decrementarContadoren1: (state) => {
      state.contador = state.contador - 1;
    },
  },
});

// Metodo global para actualizar el state
export const { aumentarContador, aumentarContadoren1, decrementarContadoren1 } =
  ejemploSlice.actions;

export default ejemploSlice.reducer;
