import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { nameImput } from '../store/slice/Poke.slice';

const InputName = () => {

    const dispatch = useDispatch()
    const [inputPoke, setInputPoke] = useState("")

    const navigate = useNavigate()

    const click = () => {
        dispatch(nameImput(inputPoke))
        navigate('/characters')
    }

    return (
        <div className='begin'>

            


            <div>
                <img className='pokedex' src="https://profound-froyo-7826bf.netlify.app/assets/image11-4a847bec.png" alt="" />

           
                <div className='hello-trainer'>
                    <h1  className='hello-input'>Hello Trainer!</h1>
                    <br />
                    <p className='hello-input'>To beging insert your name</p>
                </div>
            </div>
            <div >
                <div className='input-button'>
                    <input className='input' type="text" placeholder='Your name'
                        value={inputPoke}
                        onChange={e => setInputPoke(e.target.value)}
                    />
                    <button className='submit-button' onClick={click}>Submit</button>
                </div>
            </div>
        </div>
    );
};

export default InputName;