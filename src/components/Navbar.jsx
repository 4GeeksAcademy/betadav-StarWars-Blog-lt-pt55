import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";

export const Navbar = () => {
	const { store, dispatch } = useGlobalReducer()

	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">
				<Link to="/">
					<span className="navbar-brand mb-0 h1">React Boilerplate</span>
				</Link>

				<div className="ml-auto">
					<div className="btn-group">
						<button type="button" className="btn btn-danger dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
							Action
						</button>
						<ul className="dropdown-menu">
							<li>{store.favoriteCharacters.map((favorite, index) =>
								<p key={index}>{favorite}</p>
							)}</li>
							<li>{store.favoritePlanets.map((favorite, index) =>
								<p key={index}>{favorite}</p>
							)}</li>
						</ul>
						
					</div>
				</div>
			</div>
		</nav>
	);
};