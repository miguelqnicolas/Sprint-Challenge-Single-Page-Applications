import React from "react";
import CharacterList from "./components/CharacterList.js";
import {Link, Route} from 'react-router-dom'

export default function App() {
  return (
    <main>
      <h1 className="ui center">Rick &amp; Morty Fan Page</h1>
      <h1>Welcome to the ultimate fan site!</h1>
      {/* <Route exact path='/' component={WelcomePage}/> */}
      
      <Link to='/characters'><button>Characters</button></Link>
      <Route path='/characters' component={CharacterList}/>
    </main>
  );
}
