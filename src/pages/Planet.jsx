import { Link, useParams } from "react-router-dom";  // To use link for navigation and useParams to get URL parameters
import PropTypes from "prop-types";  // To define prop types for this component
import useGlobalReducer from "../hooks/useGlobalReducer";  // Import a custom hook for accessing the global state
import { useEffect, useState } from "react";

export const Planet = props => {
  // Access the global state using the custom hook.
  const { store } = useGlobalReducer()
  const [planet, setPlanet] = useState([])

  // Retrieve the 'theId' URL parameter using useParams hook.
  const { planetId } = useParams()
  console.log(useParams())

  function getPlanets() {
		fetch(`https://www.swapi.tech/api/planets/${planetId}`)
			.then((response) => response.json())
			.then((data) => setPlanet(data.result.properties))
	}

  useEffect(()=>{
    getPlanets()
  }, [])
  return (
    <div className="container text-center">
      {/* Display the title of the todo element dynamically retrieved from the store using theId. */}
      <h1 className="display-4">Planet: {planet.name}</h1>
      <hr className="my-4" />  {/* A horizontal rule for visual separation. */}

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
Planet.propTypes = {
  // Although 'match' prop is defined here, it is not used in the component.
  // Consider removing or using it as needed.
  match: PropTypes.object
};