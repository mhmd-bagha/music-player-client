import {configureStore} from '@reduxjs/toolkit'
import {persistStore, persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import reducers from './reducers/index';

const persistConfig = {
    key: 'root',
    storage
}

const persistReducers = persistReducer(persistConfig, reducers)

export const store = configureStore({
    reducer: persistReducers
});

export const persistor = persistStore(store)

export type RootState = ReturnType<typeof store.getState>