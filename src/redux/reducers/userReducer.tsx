import { createSlice } from '@reduxjs/toolkit'

const inputInfo = createSlice({
    name: 'user',
    initialState: {
        name: '',
        age: ''
    },
    reducers: {
        setName: (state, action) => {
            state.name = action.payload
        },
        setAge: (state, action) => {
            state.age = action.payload
        }
    }
})

export const { setName, setAge } = inputInfo.actions

export default inputInfo.reducer;