import React from "react";

const Travel = ({ destination, country, photo, distance }) => (
    <figure>
        <img src={photo} alt={country} />
        <figcaption>
            <h3>{country}</h3>
            <blockquote>{destination} <span>distance : {distance} km</span></blockquote>
        </figcaption>
    </figure>
);
export default Travel;
