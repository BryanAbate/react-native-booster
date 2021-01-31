import { combineReducers } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useSelector } from 'react-redux';
import homeSlice from './homeSlice';

export const rootReducer = combineReducers({
    homeReducer: homeSlice.reducer,
});

export type RootState = ReturnType<typeof rootReducer>
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector