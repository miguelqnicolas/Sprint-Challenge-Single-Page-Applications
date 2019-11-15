import React from "react";
import CharacterList from "./components/CharacterList.js";
import {Route} from 'react-router-dom';
import WelcomePage from './components/WelcomePage.js'

export default function App() {
  return (
    <main>
      <h1>Rick &amp; Morty Fan Page</h1>

      <Route exact path='/' component={WelcomePage}/>
      
      <Route path='/characters' component={CharacterList}/>
    </main>
  );
}
