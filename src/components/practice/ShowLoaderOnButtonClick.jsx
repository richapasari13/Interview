import React from "react";
import { useState } from "react";

const ShowLoaderOnButtonClick = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(null);

  const mockData = () => {
    const delay = Math.floor(Math.random() * 2000);

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (Math.random() >= 0.5) {
          resolve("Data fetched sucessfully!!");
        } else {
          reject("Failed to fetch");
        }
      }, delay);
    });
  };

  const handleClick = () => {
    const fetchData = async () => {
      setIsLoading(true);
      setData(null);
      try {
        const response = await mockData();
        setData(response);
      } catch (e) {
        console.log(e);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  };

  return (
    <>
      <button onClick={handleClick}>
        {isLoading ? <>Loading...</> : <>Click to fetch</>}
      </button>
      {data && <>Data fetched sucessfully</>}
    </>
  );
};

export default ShowLoaderOnButtonClick;
