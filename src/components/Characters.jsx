import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import PokeCard from './PokeCard';

const Characters = () => {

    // https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1279 este link es para la paginacion
    const pokes = useSelector(state => state.Poke)

    const [pokeApi, setPokeApi] = useState([])
    const [searchInput, setSearchInput] = useState("")
    const [kinds, setKinds] = useState([])

    const navigate = useNavigate()

    useEffect(() => {
        axios.get("https://pokeapi.co/api/v2/pokemon/")
            .then((res) => setPokeApi(res.data.results))

        axios.get("https://pokeapi.co/api/v2/type/")
            .then(res => setKinds(res.data.results))
    }, [])

    //console.log(kinds)
    console.log(pokeApi)


    const search = () => {
        navigate(`/characters/${searchInput.toLocaleLowerCase()}`)
    }

    const filterType = e => {
        // alert(e.target.value) todo depende de lo que haya en el value de los options
        //los axios sirven para consumir url
        axios.get(e.target.value)
            .then(res => setPokeApi(res.data.pokemon))
    }

    console.log(pokeApi);

    const back = () => {
        navigate('/')
    }


    return (
        <div>
            <button onClick={back}><i className="fa-solid fa-left-long"></i></button>
            <h1>Characters</h1>
            <h2>Welcome to {pokes}</h2>
            <div>
                <input type="text"
                    placeholder='search characters'
                    value={searchInput}
                    onChange={e => setSearchInput(e.target.value)}
                />
                <button onClick={search}>
                    Search
                </button>
            </div>
            <div>

                <select onChange={filterType} name="" id="">
                    {
                        kinds.map(kind => (
                            <option value={kind.url} key={kind.url}>
                                {kind.name}
                            </option>
                        ))
                    }
                </select>
            </div>
            <ul>
                {pokeApi?.map(poke => (


                    <PokeCard
                        key={poke.pokemon?.url ? poke.pokemon?.url : poke?.url}
                        url={poke.pokemon?.url ? poke.pokemon?.url : poke?.url}
                    />

                ))}

            </ul>


        </div>
    );
};

export default Characters;