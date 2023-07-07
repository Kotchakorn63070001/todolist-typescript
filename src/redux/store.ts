import {configureStore} from '@reduxjs/toolkit';
import todoReducer from './TodoSlice';

// config store
export const store = configureStore({
    // เอา reducer มาใส่ใน store
    reducer: todoReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;