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

    console.log(card)

    const changeColor = () => {
        if (card.types?.[0].type.name === "normal") {
            return "#A8A77A"
        } else if (card.types?.[0].type.name === "water") {
            return "#6390F0"
        } else if (card.types?.[0].type.name === "fire") {
            return "#EE8130"
        } else if (card.types?.[0].type.name === "electric") {
            return "#F7D02C"
        } else if (card.types?.[0].type.name === "grass") {
            return "#7AC74C"
        } else if (card.types?.[0].type.name === "ice") {
            return "#96D9D6"
        } else if (card.types?.[0].type.name === "fighting") {
            return "#C22E28"
        } else if (card.types?.[0].type.name === "poison") {
            return "#A33EA1"
        } else if (card.types?.[0].type.name === "ground") {
            return "#E2BF65"
        } else if (card.types?.[0].type.name === "flyting") {
            return "#A98FF3"
        } else if (card.types?.[0].type.name === "psychic") {
            return "#F95587"
        } else if (card.types?.[0].type.name === "bug") {
            return "#A6B91A"
        } else if (card.types?.[0].type.name === "rock") {
            return "#B6A136"
        } else if (card.types?.[0].type.name === "ghost") {
            return "#735797"
        } else if (card.types?.[0].type.name === "dragon") {
            return "#6F35FC"
        } else if (card.types?.[0].type.name === "dark") {
            return "#705746"
        } else if (card.types?.[0].type.name === "steel") {
            return "#B7B7CE"
        } else if (card.types?.[0].type.name === "fairy") {
            return "#D685AD"
        } else if (card.types?.[0].type.name === "unknown") {
            return "gray"
        } else {
            return "plum"
        }
    }


    return (
        <div className='hello'>
            <div className='card' onClick={() => navigate(`/characters/${card.id}`)} style={{ background: changeColor() }}>
                <div>
                    <img  className='cardimg' src={card.sprites?.other.dream_world.front_default} alt="" />
                    <div className='stats'>
                        <div className='name-type'>
                            <h1>{card.name}</h1>
                            <p>{card.types?.[0]?.type.name}/{card.types?.[1]?.type.name} <br /> Type: </p> 
                            <br />
                            <hr /> 
                        </div>
                        <div className='stadistics'>
                            <p>{card.stats?.[0].stat?.name} <br /> {card.stats?.[0].base_stat}</p> 
                            <p>{card.stats?.[1].stat?.name} <br />{card.stats?.[1].base_stat}</p>
                            <p>{card.stats?.[2].stat?.name} <br />{card.stats?.[2].base_stat}</p>
                            <p>{card.stats?.[5].stat?.name} <br />{card.stats?.[5].base_stat}</p>
                        </div>
                    </div>
                </div>
                
                
                    
               
                    
                    
                    
              
            </div>

        </div>
    );
};

export default PokeCard;