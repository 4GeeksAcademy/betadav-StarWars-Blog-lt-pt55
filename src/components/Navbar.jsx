import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";

export const Navbar = () => {
	const { store, dispatch } = useGlobalReducer()

	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">
				<div className="">
					<Link to="/">
						<img className="logo" src="https://www.freepnglogos.com/uploads/star-wars-logo-31.png" alt="" />
					</Link>
				</div>

				<div className="ml-auto">
					<div className="btn-group">
						<button type="button" className="btn btn-primary dropdown-toggle btn-lg" data-bs-toggle="dropdown" aria-expanded="false">
							Favorites
							<span className="badge text-bg-secondary mx-1">{store.favoriteCharacters.length + store.favoritePlanets.length}</span>
						</button>
						<ul className="dropdown-menu">
							{store.favoriteCharacters.length == 0 && store.favoritePlanets.length == 0  ?
								<div className="d-flex justify-content-center">
									<span >Empty</span>
								</div> : 
							 
							<div>
								<li>{store.favoriteCharacters.map((favorite, index) =>

									<p key={index}>
										{favorite}
										<button className="mx-2 border border-0 bg-transparent" onClick={() => dispatch(
											{
												type: 'add_to_favorite_characters',
												payload: favorite
											}
										)}>
											<i className="fa-solid fa-trash"></i>
										</button>
									</p>
								)}</li>
								<li>{store.favoritePlanets.map((favorite, index) =>
									<p key={index}>
										{favorite}
										<button className="mx-2 border border-0 bg-transparent" onClick={() => dispatch(
											{
												type: 'add_to_favorite_planets',
												payload: favorite
											}
										)}>
											<i className="fa-solid fa-trash"></i>
										</button>
									</p>
								)}</li>
							</div>
							}
						</ul>

					</div>
				</div>
			</div>
		</nav>
	);
};