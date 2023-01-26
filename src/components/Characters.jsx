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
        axios.get("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1279")
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

    // console.log(pokeApi);

    const back = () => {
        navigate('/')
    }

    const [page, setPage] = useState(1)
    const perPage = 20
    const lastIndex = page * perPage // aqui le estoy diciendo que si el first es 5 last sea 10
    const firsIndex = lastIndex - perPage
    const pokePagination = pokeApi.slice(firsIndex, lastIndex)
    const lastPage = Math.ceil(pokeApi.length / perPage) // con esto estoy obteniendo el total de paginas, los arrglos pueden llevan length

    const numbPage = [] //como es un arreglo le hago un map
    for (let i = 1; i <= lastPage; i++) {
        numbPage.push(i)
    }

    return (
        <div>
            <div className='pokedex-detail'>
                <img src="https://profound-froyo-7826bf.netlify.app/assets/image11-4a847bec.png" alt="" />
            </div>
            <button className='navButton' onClick={back}><i className="fa-solid fa-left-long"></i></button>
            <h1 className='welcome'>Welcome {pokes},</h1>
            <h2 className='welcomes'> Here you can find your favorite pokemon</h2>
            <div>
                <input className='search' type="text"
                    placeholder='search characters'
                    value={searchInput}
                    onChange={e => setSearchInput(e.target.value)}
                />
                <button className='button-pagination1' onClick={search}>
                    Search
                </button>
            </div>

            <div>

                {/* generamos un boton para para modificar la pagina sin tner que cambiar en page */}
                <div>
                    <button className='button-pagination' onClick={() => setPage(page - 1)} disabled={page === 1}> {/* esto es para que cambie y valla aumentando 1 */}
                        <i className="fa-solid fa-chevron-left"></i>
                    </button>
                    {page} / {lastPage}
                    <button className='button-pagination' onClick={() => setPage(page + 1)} disabled={page === lastPage}> {/* esto es para que cambie y valla aumentando 1  y que se desabilite cuando se uno*/}
                        <i className="fa-solid fa-angle-right"></i>
                    </button>

                </div>

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
            <ul className='pokemonsList'>
                {
                    pokePagination?.map(poke => (
                        <PokeCard
                            key={poke.pokemon?.url ? poke.pokemon?.url : poke?.url}
                            url={poke.pokemon?.url ? poke.pokemon?.url : poke?.url}
                        />

                    ))
                }
            </ul>




            {/* esto es para los botones  */}
            {
                numbPage.map(number => (

                    <button key={number} className='button-number' onClick={() => setPage(number)} >{number}</button>

                ))
            }


        </div>
    );
};

export default Characters;