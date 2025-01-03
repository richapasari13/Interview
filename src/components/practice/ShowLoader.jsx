// Show a loader on API call in Reactjs
// We will use a mock server to mimic the API call that will resolve or reject at random duration.
// But the time the promise is not fulfilled we will update the state to be loading and
// once the promise is fulfilled we will set the loading to false.
import { useEffect, useState } from "react";

const mockData = () => {
  return new Promise((resolve, reject) => {
    const delay = Math.floor(Math.random() * 2000);
    setTimeout(() => {
      if (Math.random() > 0.5) {
        resolve("Data fetched successfully!");
      } else {
        reject("Failed to fetch data.");
      }
    }, delay);
  });
};

const LoaderComponent = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setData(null);

      try {
        const data = await mockData();
        setData(data);
      } catch (e) {
        console.log(e);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      {isLoading && <div>Loading...</div>}
      {data && <div>{data}</div>}
    </>
  );
};

export default LoaderComponent;
