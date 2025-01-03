import React, { useEffect, useState, useCallback } from "react";
import { useDispatchData, useUserData } from "./UserData";
import UserList from "./UserList";

const API_URL = "https://dummyjson.com/users";

const UsersList = () => {
  const [loading, setLoading] = useState();

  const userData = useUserData();
  const dispatch = useDispatchData();

  const fetchData = useCallback(async () => {
    setLoading(true);
    const data = await fetch(API_URL);
    const response = await data.json();
    dispatch({ type: "ADD", item: response.users });
    setLoading(false);
  }, [dispatch]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <>
      <UserList userData={userData} loading={loading} />
    </>
  );
};

export default UsersList;
