import React from "react";
import { Link } from "react-router-dom";

const CardPlanet = (props) => {
    return (
        <div className="card" style={{ width: "18rem" }}>
            <img src="https://picsum.photos/200/100" className="card-img-top" alt="..." />
            <div className="card-body">
                {/* Link to the detail page of this todo. */}
                <Link to={"/planet/" + props.uid}><h5 className="card-title">{props.name}</h5></Link>
                
                <p className="card-text">Id: {props.uid}</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    )
};

export default CardPlanet