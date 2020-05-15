// Write your Character component here
import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Import Axios
import styled from 'styled-components'; // Import styled-components

const CharacterStyle = styled.div`

    .card {
        padding: 5%;
        background-color: white;
        border-radius: 5px;
    }
`


export default function Character(props){
    const character = props.character

    return(
        <CharacterStyle>
            <div className="card">
                <h2>Name: {character.name}</h2>
                <ul>
                    <li>Birth Year: {character.birth_year}</li>
                    <li>Gender: {character.gender}</li>
                    <li>Hair Color: {character.hair_color}</li>
                    <li>Weight: {character.mass}kg</li>
                    <li>Eye color: {character.eye_color}</li>
                </ul>
            </div>
        </CharacterStyle>
    )
}