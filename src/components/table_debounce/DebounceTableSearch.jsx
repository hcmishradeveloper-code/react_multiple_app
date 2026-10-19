import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function DebounceTableSearch() {
  const [datas, setDatas] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [showAll, setShowAll] = useState(false);
  const [debounceSearch, setDebounceSearch] = useState("");

  const fetchApiHandler = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const data = await response.json();
      setDatas(data);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchApiHandler();
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebounceSearch(search);
    }, 500);
    return () => clearTimeout(timer);
  }, [search]);

  const filteredData = datas.filter((data) => {
    return Object.values(data)
      .join("")
      .toLowerCase()
      .includes(debounceSearch.toLowerCase());
  });

  const displayDatas = showAll ? filteredData : filteredData.slice(0, 5);

  if (loading) return <h3>Loading...</h3>;

  return (
    <div style={{margin:'2rem 4rem', width: "900px"}}>
      <div>
        <input
          type="text"
          placeholder="Enter text for Search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{
            width: "250px",
            padding: "4px 6px",
            borderRadius: "8px",
            marginBottom: "10px",
          }}
        />
      </div>
      <div>
        {filteredData.length === 0 ? (
          <h2>No Search Data Found</h2>
        ) : (
          <>
            <table border="1" cellPadding="5px" cellSpacing="0px" width="100%">
              <thead>
                <tr>
                  <th style={{padding:"5px 0px"}}>ID</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Website</th>
                </tr>
              </thead>
              <tbody>
                {displayDatas.map((data) => (
                  <tr key={data.id}>
                    <td style={{padding:"5px 10px"}}>{data.id}</td>
                    <td style={{padding:"5px 10px"}}>{data.name}</td>
                    <td style={{padding:"5px 10px"}}>{data.email}</td>
                    <td style={{padding:"5px 10px"}}>{data.website}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <button onClick={() => setShowAll(!showAll)}>
              {showAll ? "ShowLess" : "ShowMore"}
            </button>
          </>
        )}
      </div>
      <Link className="link_click" to="/">Back to Home</Link>
    </div>
  );
}
export default DebounceTableSearch;
