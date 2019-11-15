import React, {useState, useEffect} from "react";

export default function SearchForm(props) {
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const results = props.characters.filter(character =>
      character.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    props.setCharacters(results);
  }, [searchTerm]);

  const handleChange = event => {
    setSearchTerm(event.target.value);
  };

  return (
     <form>
        <label htmlFor="search">Search:</label>
        <input id="search" name="search" type="text" placeholder="Search" onChange={handleChange} value={searchTerm}/>
      </form>
  );
}
