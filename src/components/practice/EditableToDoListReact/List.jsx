import React, { useCallback, useState } from "react";
import "./styles.css";

const List = ({ todoList, onDeleteItem, onEditItem }) => {
  const [completedItem, setCompletedItem] = useState([]);
  const [editItemKey, setEditItemKey] = useState();
  const [editItem, setEditItem] = useState();

  const handleDelete = useCallback(
    (id) => {
      if (!completedItem.includes(todoList[id]) && editItemKey !== id) {
        onDeleteItem(id);
      }
    },
    [onDeleteItem, completedItem, todoList, editItemKey]
  );

  const handleCompletedItem = (item) => {
    setCompletedItem((prev) => [item, ...prev]);
  };

  const handleEditState = (key) => {
    if (todoList.includes(todoList[key])) {
      setEditItemKey(key);
    }
  };

  const handleEditItem = (key, e) => {
    setEditItem(e.target.value);
    onEditItem(key, e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      setEditItemKey("");
      setEditItem("");
    }
  };

  return (
    <div>
      <h3>To-do list</h3>
      <ul>
        {todoList.map((item, key) => (
          <>
            <li
              key={key}
              className={"list-item"}
              onDoubleClick={() => handleCompletedItem(item)}
            >
              <div
                className={`${completedItem.includes(item) && "completed"} `}
              >
                {editItemKey === key ? (
                  <input
                    type="text"
                    placeholder={"edit text"}
                    value={editItem || todoList[key]}
                    onChange={(e) => handleEditItem(key, e)}
                    onKeyDown={handleKeyDown}
                  />
                ) : (
                  <span>{item}</span>
                )}
              </div>
              <span className="cross-icon" onClick={() => handleDelete(key)}>
                X
              </span>
              <span className="edit-icon" onClick={() => handleEditState(key)}>
                \\
              </span>
            </li>
          </>
        ))}
      </ul>
    </div>
  );
};

export default List;
