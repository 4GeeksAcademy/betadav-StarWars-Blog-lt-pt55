// Import necessary hooks and components from react-router-dom and other libraries.
import { Link, useParams } from "react-router-dom";  // To use link for navigation and useParams to get URL parameters
import PropTypes from "prop-types";  // To define prop types for this component
import useGlobalReducer from "../hooks/useGlobalReducer";  // Import a custom hook for accessing the global state
import { useEffect, useState } from "react";

// Define and export the Single component which displays individual item details.
export const Character = props => {
  // Access the global state using the custom hook.
  const { store } = useGlobalReducer()
  const [character, setCharacter] = useState([])

  // Retrieve the 'theId' URL parameter using useParams hook.
  const { characterId } = useParams()

  function getCharacters() {
    fetch(`https://www.swapi.tech/api/people/${characterId}`)
      .then((response) => response.json())
      .then((data) => setCharacter(data.result.properties))
  }

  useEffect(() => {
    getCharacters()
  }, [])

  return (
    <div className="container text-center">
      <div className="row">
        <div className="col-6">
          <img src="https://picsum.photos/500/300" alt="" />
        </div>
        <div className="col-6">
          {/* Display the title of the todo element dynamically retrieved from the store using theId. */}
          <h1 className="display-4">{character.name}</h1>
          <p>{store.description}</p>
        </div>
      </div>
      <hr className="my-4" />  {/* A horizontal rule for visual separation. */}
      <div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">Gender: {character.gender}</li>
          <li className="list-group-item">Height: {character.height}</li>
          <li className="list-group-item">Eyes color: {character.eye_color}</li>
          <li className="list-group-item">Skin color: {character.skin_color}</li>
          <li className="list-group-item">Hair color: {character.hair_color}</li>
        </ul>
      </div>


      {/* A Link component acts as an anchor tag but is used for client-side routing to prevent page reloads. */}
      <Link to="/">
        <span className="btn btn-primary btn-lg" href="#" role="button">
          Back home
        </span>
      </Link>
    </div>
  );
};

// Use PropTypes to validate the props passed to this component, ensuring reliable behavior.
Character.propTypes = {
  // Although 'match' prop is defined here, it is not used in the component.
  // Consider removing or using it as needed.
  match: PropTypes.object
};