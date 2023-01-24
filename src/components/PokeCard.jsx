import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const PokeCard = ({url}) => {

    const [card, setCard] = useState ({})

    const navigate = useNavigate()

    useEffect (() => {
    axios.get(url)
    .then(res => setCard(res.data))
    }, [])

    //console.log(card)

    return (
        <div className='hola'>
        <div className='card' onClick={() => navigate(`/characters/${card.id}`)}>
            <h1>{card.name}</h1>
            <img src={card.sprites?.front_default
             } alt="" />
        </div>
        </div>
    );
};

export default PokeCard;