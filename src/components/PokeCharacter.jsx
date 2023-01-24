import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const PokeCharacter = () => {

  const [pokeDetail, setPokeDetail] = useState ({})

  useEffect (() => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
    .then(res => setPokeDetail(res.data))
    .catch(() => alert("Ese pokemon no existe")) 
    // el catch se ejecuta cuando hay algun error 
  }, [])

  //console.log(pokeDetail)

const {id} = useParams()

const navigate = useNavigate()

const backCharacters = () => {
  navigate('/characters')
  }

    return (
        <div>
            <button onClick={backCharacters}><i className="fa-solid fa-left-long"></i></button>
            <h1>Pokemon Details</h1>
            <h2>{pokeDetail.name}</h2> 
            <p>id: <b>{id}</b></p>
            <img src={pokeDetail.sprites?.back_default} alt="" />
            <img src={pokeDetail.sprites?.front_default} alt="" />
             
          
        </div>
    );
};

export default PokeCharacter;