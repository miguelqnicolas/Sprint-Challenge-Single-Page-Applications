import React, {useState, useEffect} from "react";

export default function SearchForm(props) {
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const results = props.characters.filter(character =>
      character.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    props.setCharacters(results);
    console.log(results);
  }, [searchTerm]);

  const handleChange = event => {
    setSearchTerm(event.target.value);
  };

  return (
     <form>
        <label htmlFor="search"><i class="fas fa-search"></i></label>
        <input id="search" name="search" type="text" placeholder="Search" onChange={handleChange} value={searchTerm} autoComplete='off'/>
      </form>
  );
}
