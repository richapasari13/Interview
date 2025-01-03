import React from "react";
import Card from "./Card";
import "./styles.css";

const TaskColumns = ({ todo, onDrop, onDragOver, onDragStart }) => {
  return (
    <div className="task-columns">
      <div className="task-columns-label">{todo.label}</div>
      {todo.cards.map((content, index) => (
        <Card
          key={`${todo.id}-${index}`}
          content={content}
          id={`${todo.id}-${index}`}
          onDragStart={(e) => onDragStart(e, `${todo.id}-${index}`)}
        />
      ))}
    </div>
  );
};

export default TaskColumns;
