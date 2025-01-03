import React, { useState } from "react";
import "./styles.css";

const Card = ({ content }) => {
  return (
    <div
      className="card"
      draggable="true"
      onDragStart={(e) => e.dataTransfer.setData("text/plain", content)}
    >
      {content}
    </div>
  );
};

const Column = ({ title, cards, onDrop, onDragOver }) => {
  return (
    <div className="column" onDragOver={onDragOver} onDrop={onDrop}>
      <h2>{title}</h2>
      {cards.map((card, index) => (
        <Card key={index} content={card} />
      ))}
    </div>
  );
};

const DragAndDropBoard = () => {
  const [todo, setTodo] = useState(["Task 1", "Task 2"]);
  const [inProgress, setInProgress] = useState(["Task 3"]);
  const [done, setDone] = useState(["Task 4"]);

  const onDrop = (e, setState, sourceList, setSourceList) => {
    e.preventDefault();
    const cardContent = e.dataTransfer.getData("text/plain");

    // Remove the card from the original list
    setSourceList((prev) => prev.filter((card) => card !== cardContent));

    // Add the card to the new list
    setState((prev) => [...prev, cardContent]);
  };

  const onDragOver = (e) => {
    e.preventDefault();
  };

  return (
    <div className="container">
      <Column
        title="To Do"
        cards={todo}
        onDrop={(e) => onDrop(e, setTodo, inProgress, setInProgress)}
        onDragOver={onDragOver}
      />
      <Column
        title="In Progress"
        cards={inProgress}
        onDrop={(e) => onDrop(e, setInProgress, todo, setTodo)}
        onDragOver={onDragOver}
      />
      <Column
        title="Done"
        cards={done}
        onDrop={(e) => onDrop(e, setDone, inProgress, setInProgress)}
        onDragOver={onDragOver}
      />
    </div>
  );
};

export default DragAndDropBoard;
