import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const PokeCharacter = () => {

  const [pokeDetail, setPokeDetail] = useState({})

  useEffect(() => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then(res => setPokeDetail(res.data))
      .catch(() => alert("Ese pokemon no existe"))
    // el catch se ejecuta cuando hay algun error 
  }, [])

  //console.log(pokeDetail)

  const { id } = useParams()

  const navigate = useNavigate()

  const backCharacters = () => {
    navigate('/characters')
  }

  const changeColorss = () => {
    if (pokeDetail.types?.[0].type.name === "normal") {
        return "#A8A77A"
    } else if (pokeDetail.types?.[0].type.name === "water") {
        return "#6390F0"
    } else if (pokeDetail.types?.[0].type.name === "fire") {
        return "#EE8130"
    } else if (pokeDetail.types?.[0].type.name === "electric") {
        return "#F7D02C"
    } else if (pokeDetail.types?.[0].type.name === "grass") {
        return "#7AC74C"
    } else if (pokeDetail.types?.[0].type.name === "ice") {
        return "#96D9D6"
    } else if (pokeDetail.types?.[0].type.name === "fighting") {
        return "#C22E28"
    } else if (pokeDetail.types?.[0].type.name === "poison") {
        return "#A33EA1"
    } else if (pokeDetail.types?.[0].type.name === "ground") {
        return "#E2BF65"
    } else if (pokeDetail.types?.[0].type.name === "flyting") {
        return "#A98FF3"
    } else if (pokeDetail.types?.[0].type.name === "psychic") {
        return "#F95587"
    } else if (pokeDetail.types?.[0].type.name === "bug") {
        return "#A6B91A"
    } else if (pokeDetail.types?.[0].type.name === "rock") {
        return "#B6A136"
    } else if (pokeDetail.types?.[0].type.name === "ghost") {
        return "#735797"
    } else if (pokeDetail.types?.[0].type.name === "dragon") {
        return "#6F35FC"
    } else if (pokeDetail.types?.[0].type.name === "dark") {
        return "#705746"
    } else if (pokeDetail.types?.[0].type.name === "steel") {
        return "#B7B7CE"
    } else if (pokeDetail.types?.[0].type.name === "fairy") {
        return "#D685AD"
    } else if (pokeDetail.types?.[0].type.name === "unknown") {
        return "gray"
    } else {
        return "plum"
    }
}

  return (
    <div className='background' >
      <div className='details'>
        <div>
          <div className='pokemon' style={{ background: changeColorss() }}>
            <div>
              <img className='poke-img' src={pokeDetail.sprites?.other.dream_world.front_default} alt="" />
            </div>
            <div className='poke-detail'>
              <div className='poke-weight'>
                <p>{pokeDetail.height} <br /> Height</p>
                <p>{pokeDetail.weight} <br /> weight</p>
              </div>
              <h1>{pokeDetail.name}</h1> <hr />
              <p className='id'>#<b> {id}</b></p>
            </div>
          </div>
        </div>


        <div className='movements' style={{ background: changeColorss() }}>
          <h1>Movements</h1>
          <ul className='movements-list'>
            {pokeDetail.moves?.map(move => (
              <li key={move.move.url}>
                {move.move.name}
              </li>
            ))}
          </ul>
        </div>


        <div className='stadistics'>
          <div className='type' style={{ background: changeColorss() }}>
            <h1>type</h1>
            <div className='type-habilities'>
              <p className='type-button'>{pokeDetail.types?.[0]?.type.name}</p>
              <p className='type-button'>{pokeDetail.types?.[1]?.type.name}</p>
            </div>

          </div>
          <div className='habilities' style={{ background: changeColorss() }}>
            <h1>habilities</h1>
            <div className='type-habilities'>
              <p className='habilities-button'>{pokeDetail.abilities?.[0]?.ability.name}</p>
              <p className='habilities-button'>{pokeDetail.abilities?.[1]?.ability.name}</p>
            </div>

          </div>
        </div>
      </div>
      <div className='pokedex-detail'>
        <img src="https://profound-froyo-7826bf.netlify.app/assets/image11-4a847bec.png" alt="" />
      </div>
      

    
 




      <button className='navButton' onClick={backCharacters}><i className="fa-solid fa-left-long"></i></button>

    </div>
  );
};

export default PokeCharacter;