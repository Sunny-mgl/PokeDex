import { createSlice } from '@reduxjs/toolkit';

// Cambiamos mySlice por el nombre de nuestro slice (usersSlice, toDosSlice...)
export const PokeSlice = createSlice({
		name: 'Poke',
    initialState: "",
    reducers: {
       nameImput: (state, action) => {
        const inputPoke = action.payload
        return inputPoke
       }
    }
})

export const { nameImput } = PokeSlice.actions;

export default PokeSlice.reducer;