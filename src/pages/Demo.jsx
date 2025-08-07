// Import necessary components from react-router-dom and other parts of the application.
import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";  // Custom hook for accessing the global state.
import { useEffect, useState } from "react";

export const Demo = () => {
  // Access the global state and dispatch function using the useGlobalReducer hook.
  const { store, dispatch } = useGlobalReducer()
  const [characters, setCharacters] = useState([])

  function getCharacters() {
    fetch('https://www.swapi.tech/api/people/')
      .then((response) => response.json())
      .then((data) => setCharacters(data.results))
  }

  useEffect(() => {
    getCharacters()
  },[])


  return (
    <div className="container">
      <ul className="list-group">
        {/* Map over the 'characters' array from the store and render each item as a list element */}
        {characters.map((personaje) => {
          return (
            <li
              key={personaje.uid}  // React key for list items.
              className="list-group-item d-flex justify-content-between">

              {/* Link to the detail page of this todo. */}
              <Link to={"/character/" + personaje.uid}>Link to: {personaje.name} </Link>
              <div className="card-group">
                <div className="card">
                  <img src="https://picsum.photos/200/100" className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title"> {personaje.name}</h5>
                    <p className="card-text">Id: {personaje.uid}</p>
                  </div>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
      <br />

      <Link to="/">
        <button className="btn btn-primary">Back home</button>
      </Link>
    </div>
  );
};
