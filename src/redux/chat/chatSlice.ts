import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface ChatState {
  chatWith: { name: string; email: string };
}

const initialState: ChatState = {
  chatWith: { name: '', email: '' },
};

export const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    updateChat: (
      state,
      action: PayloadAction<{ name: string; email: string }>
    ) => {
      state.chatWith = action.payload;
    },
  },
});

export const { updateChat } = chatSlice.actions;

export default chatSlice.reducer;
