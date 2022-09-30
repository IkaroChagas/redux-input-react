import { configureStore } from '@reduxjs/toolkit'
import userReducer from './reducers/userReducer'


export const Store = configureStore({
    reducer: {
        user: userReducer
    }
})

export type RootState = ReturnType<typeof Store.getState>