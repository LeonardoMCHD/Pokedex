const { useState, useEffect } = require("react")
import styled from "styled-components";
import GetPokemonData from "../Utils/GetPokemonData";

const TileWrapper = styled.div`
    background-color: white;
    padding: 15px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    position: relative;
    border: 2px solid gray;
    width: 200px;
    height: 200px;
    margin: 15px;
    img{
        width:150px;
        height:150px;
    }
    `;

    const PokemonName = styled.div`
        background: gray;
        width: 100%;
        position: absolute;
        left: 0;
        bottom: 0;
        color: #fff;
        text-align: center;
        font-size: 20px;
        `;
        
        
        
        
        export default function PokemonTile({ pokemon }) {
            const [PokemonInfo, setPokemonInfo] = useState({})

        useEffect(() => {
            GetPokemonData(pokemon.url)
            .then(( success ) => {
                setPokemonInfo(success)
            })
            .catch((error) => {
                console.log(error)
            });
        }, []);
            return (
                <TileWrapper>
                    <img src={PokemonInfo.sprites ? PokemonInfo.sprites.front_default : "https://pngimg.com/uploads/pokeball/pokeball_PNG21.png"} />
                    <PokemonName>{pokemon.name ? pokemon.name : "unknown"}</PokemonName>
                </TileWrapper>
            );
        }

