import AsyncStorage from "@react-native-async-storage/async-storage";
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit"
import { useDispatch } from "react-redux";
import { FLUSH, PAUSE, PERSIST, persistReducer, persistStore, PURGE, REGISTER, REHYDRATE } from "redux-persist";
import { rootReducer } from "./reducers/rootReducer";

const persistConfig = {
    key: 'root',
    version: 1,
    storage: AsyncStorage
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
    reducer: persistedReducer,
    middleware: getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
        }
    })
})

export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()

export const persistor = persistStore(store)