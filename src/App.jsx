import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { HashRouter, Routes, Route, useNavigate } from 'react-router-dom'
import InputName from './components/InputName'
import Characters from './components/Characters'
import PokeCharacter from './components/PokeCharacter'
import { useSelector } from 'react-redux'
import ProtectedRoutes from './components/ProtecterRout'


function App() {

  //con esto accedi a lo que esta en redux 
  const poke = useSelector (state => state.Poke)
//  el navigate solo pudo usar dentor dentro del hashRouter 

  return (
    <div className="App">
     <HashRouter>
       <Routes>
         <Route path='/' element={<InputName/>}/> 
        {/* si las encierro aqui vana ser rutas protejidas  */}
         <Route element={<ProtectedRoutes/>}>
          <Route path='/characters' element={<Characters/>}/>
         <Route path='/characters/:id' element={<PokeCharacter/>}/>

         </Route>
       </Routes> 
       <br />
       
     </HashRouter>
    </div>
  )
}

export default App
