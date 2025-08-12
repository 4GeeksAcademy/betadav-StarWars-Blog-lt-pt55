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

  function getPlanets() {
    fetch(`https://www.swapi.tech/api/planets/${planetId}`)
      .then((response) => response.json())
      .then((data) => setPlanet(data.result.properties))
  }

  useEffect(() => {
    getPlanets()
  }, [])
  return (
    <div className="container text-center">
      <div className="row">
        <div className="col-6">
          <img src="https://picsum.photos/500/300" alt="" />
        </div>
        <div className="col-6">
          {/* Display the title of the todo element dynamically retrieved from the store using theId. */}
          <h1 className="display-4">{planet.name}</h1>
          <p>{store.description}</p>
        </div>
      </div>
      <hr className="my-4" />  {/* A horizontal rule for visual separation. */}
      <div className="container text-center text-danger">
        <div className="row">
          <div className="col">
            <p className="fw-bold">Name</p>
            <p>{planet.name}</p>
          </div>
          <div className="col">
            <p className="fw-bold">Climate</p>
            <p>{planet.climate}</p>
          </div>
          <div className="col">
            <p className="fw-bold">Diameter</p>
            <p>{planet.diameter}</p>
          </div>
          <div className="col">
            <p className="fw-bold">Terrain</p>
            <p>{planet.terrain}</p>
          </div>
          <div className="col">
            <p className="fw-bold">Orbital period</p>
            <p>{planet.orbital_period}</p>
          </div>
          <div className="col">
            <p className="fw-bold">Population</p>
            <p>{planet.population}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

// Use PropTypes to validate the props passed to this component, ensuring reliable behavior.
Planet.propTypes = {
  // Although 'match' prop is defined here, it is not used in the component.
  // Consider removing or using it as needed.
  match: PropTypes.object
};