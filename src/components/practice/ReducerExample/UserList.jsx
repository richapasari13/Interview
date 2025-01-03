import React, { useState } from "react";
import { useDispatchData } from "./UserData";

const UserList = ({ userData, loading }) => {
  const [isEdit, setIsEdit] = useState(false);
  const [editId, setEditId] = useState("");
  const [value, setValue] = useState("");
  const dispatch = useDispatchData();

  const handleDeleteAction = (userId) => {
    dispatch({ type: "DELETE", userId });
  };

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleEdit = (userId) => {
    setEditId(userId);
    setIsEdit(true);
  };

  const handleBlur = (e, userId) => {
    setIsEdit(false);
    dispatch({
      type: "REPLACE",
      payload: { userId, value },
    });
  };

  return (
    <div>
      <div>{loading && !userData.length && <span>Loading..</span>}</div>
      {!!userData.length && (
        <div>
          {userData?.map((user) => (
            <>
              <ul key={user.id}>
                <li>
                  {user.id === editId && isEdit ? (
                    <input
                      type="text"
                      onChange={handleChange}
                      defaultValue={user.firstName}
                      onBlur={(e) => handleBlur(e, user.id)}
                    />
                  ) : (
                    <>
                      {user.firstName} | {user.age}
                    </>
                  )}
                </li>
              </ul>
              <button onClick={() => handleDeleteAction(user.id)}>
                Delete
              </button>
              <button onClick={() => handleEdit(user.id)}>Edit</button>
            </>
          ))}
        </div>
      )}
    </div>
  );
};

export default UserList;
