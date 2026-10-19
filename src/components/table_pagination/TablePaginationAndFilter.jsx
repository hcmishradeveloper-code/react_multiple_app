import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function TablePaginationAndFilter() {
  const [datas, setDatas] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortData, setSortData] = useState({ key: "id", direction: "asc" });

  let data_per_page = 4;

  const fetchAPIHandler = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      if (!response.ok) {
        throw new Error("Response not found");
      }
      const data = await response.json();
      setDatas(data);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAPIHandler();
  }, []);

  const filteredData = datas.filter((data) => {
    return Object.values(data)
      .join("")
      .toLowerCase()
      .includes(search.toLowerCase());
  });

  const sortedDatas = [...filteredData].sort((a, b) => {
    let first = a[sortData.key];
    let second = b[sortData.key];
    if (first < second) return sortData.direction === "asc" ? -1 : 1;
    if (first > second) return sortData.direction === "asc" ? 1 : -1;
    return 0;
  });

  const dataSortHandler = (key) => {
    setSortData((prev) => ({
      key,
      direction: prev.key === key && prev.direction === "asc" ? "dsc" : "asc",
    }));
  };

  const totalPages = Math.ceil(sortedDatas.length / data_per_page);

  const paginatedData = sortedDatas.slice(
    (currentPage - 1) * data_per_page,
    currentPage * data_per_page
  );

  if (loading) return <h2>Loading...</h2>;

  return (
    <div style={{width: 800, marginLeft:"4rem"}}>
      <h2 style={{margin:"10px 0px"}}>Pagination</h2>
      <input
        type="text"
        placeholder="Enter text for search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{
          width: "250px",
          padding: "5px",
          borderRadius: "9px",
          marginBottom: "10px",
        }}
      />
      {filteredData.length === 0 ? (
        <h3>Search Data not found</h3>
      ) : (
        <>
          <table border="1" cellSpacing="0px" cellPadding="5px" width="100%">
            <thead>
              <tr>
                <th style={{padding:"5px 0px"}} onClick={() => dataSortHandler("id")}>ID</th>
                <th onClick={() => dataSortHandler("name")}>Name</th>
                <th onClick={() => dataSortHandler("email")}>Email</th>
                <th onClick={() => dataSortHandler("website")}>Website</th>
              </tr>
            </thead>
            <tbody>
              {paginatedData.map((data) => (
                <tr key={data.id}>
                  <td style={{padding:"5px 10px"}}>{data.id}</td>
                  <td style={{padding:"5px 10px"}}>{data.name}</td>
                  <td style={{padding:"5px 10px"}}>{data.email}</td>
                  <td style={{padding:"5px 10px"}}>{data.website}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div style={{display:'flex', marginTop:"10px"}}>
            <button
              disabled={currentPage === 1}
              onClick={() => setCurrentPage((prev) => prev - 1)}
              style={{padding:"5px 10px", borderRadius:'6px'}}
            >
              BackWord
            </button>
            <h3 style={{padding:"5px"}}>
              Page: {currentPage} / {totalPages}
            </h3>
            <button
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage((prev) => prev + 1)}
              style={{padding:"5px 10px", borderRadius:'6px'}}
            >
              Forward
            </button>
          </div>
        </>
      )}
      <Link className="link_click" to="/">Back to Home</Link>
    </div>
  );
}
export default TablePaginationAndFilter;