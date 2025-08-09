import React from "react";
import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";

const CardPlanet = (props) => {
    const { store, dispatch } = useGlobalReducer()
    return (
        <div className="card mx-3" style={{ width: "auto" }}>
            <img src="https://picsum.photos/200/100" className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{props.name}</h5>
                <p className="card-text">Id: {props.uid}</p>

                <div>
                    {/* Link to the detail page of this todo. */}
                    <Link to={"/planet/" + props.uid}><button className="btn btn-primary mx-2">Learn more</button></Link>
                    <button className="btn btn-primary" onClick={()=>dispatch({
                        type: "add_to_favorite_planets",
                        payload: props.name
                    })}>Agregar a fav</button>
                </div>

            </div>
        </div>
    )
};

export default CardPlanet