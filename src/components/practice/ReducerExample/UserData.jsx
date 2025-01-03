import React, { createContext, useContext, useReducer } from "react";

const UserListContext = createContext([]);
const UserDispatchContext = createContext();

const UserDataProvider = ({ children }) => {

  const reducer = (state, action) => {
    switch (action.type) {
      case "ADD":
        return [...state, ...action.item];

      case "DELETE":
        const newArray = state.filter(({ id }) => id !== action.userId);
        return newArray;

      case "REPLACE":
        const obj = state.find(({ id }) => id === action.payload.userId);
        obj.firstName = action.payload.value;
        return state;

      default:
        throw new Error("Invalid action");
    }
  };

  const [state, dispatch] = useReducer(reducer, []);

  return (
    <UserDispatchContext.Provider value={dispatch}>
      <UserListContext.Provider value={state}>
        {children}
      </UserListContext.Provider>
    </UserDispatchContext.Provider>
  );
};

export default UserDataProvider;

export const useUserData = () => useContext(UserListContext);
export const useDispatchData = () => useContext(UserDispatchContext);
