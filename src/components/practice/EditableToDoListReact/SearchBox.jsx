import React, { useCallback, useState } from "react";

const SearchBox = ({ onAdd }) => {
  const [todo, setTodo] = useState("");

  const handleAddItem = (e) => {
    setTodo(e.target.value);
  };

  const handleOnSubmit = useCallback(() => {
    onAdd(todo);
    setTodo("");
  }, [todo, onAdd]);

  const handleKeyDown = useCallback(
    (e) => {
      if (!!todo.length && e.key === "Enter") {
        handleOnSubmit();
      }
    },
    [handleOnSubmit, todo.length]
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Input todo items"
        onChange={handleAddItem}
        value={todo}
        onKeyDown={handleKeyDown}
      />
      <button onClick={handleOnSubmit} disabled={todo === ""}>
        Submit
      </button>
    </div>
  );
};

export default SearchBox;
