import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { nameImput } from '../store/slice/Poke.slice';

const InputName = () => {

    const dispatch = useDispatch()
    const [inputPoke, setInputPoke] = useState ("")

    const navigate = useNavigate()
   
    const click = () => {
        dispatch(nameImput(inputPoke))
        navigate('/characters')
    }

    return (
        <div>
            <h1>hi</h1>
            <input type="text" 
             value={inputPoke}
             onChange={e => setInputPoke(e.target.value)}
            />
            <button onClick={click}>Submit</button>
        </div>
    );
};

export default InputName;