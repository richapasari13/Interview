import { useCallback, useEffect, useState } from "react";
import "./styles.css";

// Mock API call to simulate fetching data
const mockApi = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      let value = new Array(50).fill(Math.random());
      console.log("value", value);
      resolve([...value]);
    }, 1000);
  });
};

const InfiniteScroll = () => {
  const [data, setData] = useState([...new Array(50).fill(Math.random())]);
  const [loading, setLoading] = useState(false); // To track loading state
  // Function to handle scroll event
  const handleScroll = useCallback(() => {
    if (loading) return; // Prevent additional API calls if data is being fetched
    if (
      window.innerHeight + window.scrollY >=
      document.documentElement.scrollHeight
    ) {
      console.log("Reached the bottom");
      loadMoreData();
    }
  }, [loading]);

  const loadMoreData = async () => {
    setLoading(true);
    try {
      const newData = await mockApi();
      console.log("newData", newData);
      setData((prev) => [...prev, ...newData]);
    } catch (e) {
      console.log("Error fetching new data:", e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // Adding the scroll event listener
    document.addEventListener("scroll", handleScroll);

    // Cleanup event listener on unmount
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  return (
    <div>
      {data.map((value, key) => (
        <div key={key}>{(value * key).toFixed()}</div>
      ))}
      {loading && <div>Loading...</div>}
    </div>
  );
};

export default InfiniteScroll;
