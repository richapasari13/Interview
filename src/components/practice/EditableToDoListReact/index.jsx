import React, { useState } from "react";
import SearchBox from "./SearchBox";
import List from "./List";

const EditableTodoList = () => {
  const [todoList, setTodoItem] = useState([]);

  const handleAddItem = (item) => {
    setTodoItem((prev) => [item, ...prev]);
  };

  const handleDeleteItem = (id) => {
    const newlist = todoList.filter((item) => {
      return item !== todoList[id];
    });

    setTodoItem(newlist);
  };

  const handleEditItem = (oldKey, newValue) => {
    todoList[oldKey] = newValue;
    setTodoItem(todoList);
  };

  return (
    <div>
      <SearchBox onAdd={handleAddItem} />
      <List
        todoList={todoList}
        onDeleteItem={handleDeleteItem}
        onEditItem={handleEditItem}
      />
    </div>
  );
};

export default EditableTodoList;
