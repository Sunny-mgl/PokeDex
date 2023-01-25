import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const PokeCard = ({ url }) => {

    const [card, setCard] = useState({})

    const navigate = useNavigate()

    useEffect(() => {
        axios.get(url)
            .then(res => setCard(res.data))
    }, [])

    //console.log(card)

    return (
        <div className='hello'>
            <div className='card' onClick={() => navigate(`/characters/${card.id}`)}>
                <div>
                    <img src={card.sprites?.other.dream_world.front_default} alt="" />
                </div>
                <div>
                    <h1>{card.name}</h1>
                    <p>{card.types?.[0]?.type.name}</p>/<p>{card.types?.[1]?.type.name}</p>
                    <p>Type</p>
                </div>
                <div>
                    <p>{card.stats?.[0].stat?.name}</p>
                    <p>{card.stats?.[0].base_stat}</p>
                    <p>{card.stats?.[1].stat?.name}</p>
                    <p>{card.stats?.[1].base_stat}</p>
                    <p>{card.stats?.[2].stat?.name}</p>
                    <p>{card.stats?.[2].base_stat}</p>
                    <p>{card.stats?.[5].stat?.name}</p>
                    <p>{card.stats?.[5].base_stat}</p>
                    
                    
                </div>
            </div>

        </div>
    );
};

export default PokeCard;