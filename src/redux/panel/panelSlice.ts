import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface PanelState {
  value: string;
}

const initialState: PanelState = {
  value: 'chats',
};

export const panelSlice = createSlice({
  name: 'panel',
  initialState,
  reducers: {
    updatePanel: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
  },
});

export const { updatePanel } = panelSlice.actions;

export default panelSlice.reducer;
