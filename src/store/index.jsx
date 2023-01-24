import { configureStore } from '@reduxjs/toolkit'
import PokeSlice  from './slice/Poke.slice'

export default configureStore({
  reducer: {
     Poke : PokeSlice
	}
})