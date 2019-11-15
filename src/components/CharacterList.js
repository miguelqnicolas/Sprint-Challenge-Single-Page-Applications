import React, { useEffect, useState } from "react";
import axios from 'axios';
import {Link} from 'react-router-dom';
import {Card, CardText, CardBody, CardTitle, Button} from 'reactstrap';
import SearchForm from './SearchForm';

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
    // tried to add dependency but it started looping?
  }, []);

  return (
    <>
      <Link to='/'><Button color='info'>Back Home</Button>{' '}</Link>
      
      <SearchForm characters={characters} setCharacters={setCharacters}/>
      
      <section className="card-container">
        {characters.map((iteration, index) => (
          <Card className='card' key={index}>
            <CardBody>
              <CardTitle><h3>{iteration.name}</h3></CardTitle>
              <CardText>Status: {iteration.status}</CardText>
              <CardText>Species: {iteration.species}</CardText>
              <CardText>Type: {iteration.type}</CardText>
            </CardBody>
          </Card>
        ))}
      </section>
    </>
  );
}