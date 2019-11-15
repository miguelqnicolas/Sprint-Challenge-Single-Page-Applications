import React, { useEffect, useState } from "react";
import axios from 'axios';
import {Link} from 'react-router-dom';

export default function CharacterList() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    axios.get('https://rickandmortyapi.com/api/character/')
      .then(response => {
        setCharacters(response.data.results);
      })
      .catch(error => {
        console.log(error);
      })
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
  }, []);

  return (
    <>
      <Link to='/'><button>Back Home</button></Link>
      <section className="character-list">
        {characters.map((iteration, index) => (
          <div key={index}>
            <h2>{iteration.name}</h2>
            <p>{iteration.status}</p>
            <p>{iteration.species}</p>
            <p>{iteration.type}</p>
          </div>
        ))}
      </section>
    </>
  );
}