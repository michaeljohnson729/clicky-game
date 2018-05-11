import React from "react";
import "./ImageCard.css";

const ImageCard = props => (
  <div className="card" onClick={() => props.handleClick(props.id)}>
    <div className="img-container">
      <img alt={props.id} src={props.image} />
    </div>
  </div>
);

export default ImageCard;
