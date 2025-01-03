import React from "react";
import "./styles.css";

const Card = ({ content, id, onDragStart }) => {
  return (
    <div
      className="card-wrapper"
      draggable="true"
      id={id}
      onDragStart={onDragStart}
    >
      <div>{content}</div>
    </div>
  );
};

export default Card;
