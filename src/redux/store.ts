import { configureStore } from '@reduxjs/toolkit';
import panelReducer from './panel/panelSlice';
import chatReducer from './chat/chatSlice';

export const store = configureStore({
  reducer: {
    panel: panelReducer,
    chat: chatReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
