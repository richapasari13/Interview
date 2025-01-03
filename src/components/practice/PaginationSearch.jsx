import React from "react";
import { useEffect, useState, useCallback } from "react";

const API_URL = `https://api.thecatapi.com/v1/breeds`;
const PAGE_SIZE = 10;

const PaginationSearch = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [pageNum, setPageNum] = useState(0);

  const fetchData = useCallback(async () => {
    setIsLoading(true);
    try {
      const response = await fetch(
        `${API_URL}?page=${pageNum}&limit=${PAGE_SIZE}`
      );
      const apiData = await response.json();
      const filteredData = apiData.filter((item) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
      );

      setData(filteredData);
    } catch (e) {
      console.log(e);
    } finally {
      setIsLoading(false);
    }
  }, [pageNum, searchTerm]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleButtonClick = (pageNum) => {
    setPageNum(pageNum);
  };

  console.log("searchTerm", searchTerm);

  return (
    <>
      <input
        type="text"
        placeholder="Search breeds"
        value={searchTerm}
        onChange={handleSearch}
      />
      <button
        onClick={() => handleButtonClick(pageNum - 1)}
        disabled={pageNum === 0}
      >
        -
      </button>
      Page {pageNum}
      <button
        onClick={() => handleButtonClick(pageNum + 1)}
        disabled={data?.length === pageNum}
      >
        +
      </button>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <>
          <ul>
            {data?.map((breed) => (
              <React.Fragment key={breed.id}>
                <li>{breed.name}</li>
                <li>{breed.breed_group}</li>
              </React.Fragment>
            ))}
          </ul>
        </>
      )}
    </>
  );
};

export default PaginationSearch;
