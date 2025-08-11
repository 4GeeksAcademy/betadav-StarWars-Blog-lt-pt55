import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";  // Custom hook for accessing the global state.
import { useEffect, useState } from "react";
import CardCharacter from "../components/CardCharacter";
import CardPlanet from "../components/CardPlanet";

export const Home = () => {

	const { store, dispatch } = useGlobalReducer()

	const [characters, setCharacters] = useState([])
	const [planets, setPlanets] = useState([])

	function getCharacters() {
		fetch('https://www.swapi.tech/api/people/')
			.then((response) => response.json())
			.then((data) => setCharacters(data.results))
	}

	function getPlanets() {
		fetch('https://www.swapi.tech/api/planets/')
			.then((response) => response.json())
			.then((data) => setPlanets(data.results))
	}

	useEffect(() => {
		getCharacters()
		getPlanets()
	}, [])

	return (
		<div className="container text-center">
			<div className="my-5">
				<div className="d-flex justify-content-start m-3">
					<h1 className="text-danger">
						Characters
					</h1>
				</div>
				<div className="row flex-row overflow-x-scroll flex-nowrap">
					{/* Map over the 'characters' array from the store and render each item as a list element */}
					{characters.map((personaje) => <CardCharacter key={personaje.uid} name={personaje.name} uid={personaje.uid} />)}
				</div>
			</div>

			<div className="">
				<div className="d-flex justify-content-start m-3">
					<h1 className="text-danger">
						Planets
					</h1>
				</div>
				<div className="row flex-row overflow-x-scroll flex-nowrap">
					{/* Map over the 'characters' array from the store and render each item as a list element */}
					{planets.map((planet) => <CardPlanet key={planet.uid} name={planet.name} uid={planet.uid} />)}
				</div>
			</div>
		</div>

	);
};