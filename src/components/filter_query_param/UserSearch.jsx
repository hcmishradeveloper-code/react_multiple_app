import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function UserSearch() {
  const [datas, setDatas] = useState([]);
  const [search, setSearch] = useState("");

  const handleFetchAPI = async (query = "") => {
    try {
      const url = query
        ? `https://dummyjson.com/users/search?q=${query}`
        : "https://dummyjson.com/users";
       /*
            //or (if the query has search then use search)
        // const url = query
        // ? `https://jsonplaceholder.typicode.com/users?q=${query}` 
        // : "https://jsonplaceholder.typicode.com/users"  
           {in this case directly finde data so use "setDatas(data)"}
        */
      console.log("Query:", query);
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error("Data not found");
      }

      const data = await response.json();

      setDatas(data.users);
    } catch (error) {
      console.log(error);
    }
  };

  // Initial Load
  useEffect(() => {
    handleFetchAPI();
  }, []);

  // Debounced Search
  useEffect(() => {
    if (!search) return;
    const timeout = setTimeout(() => {
      handleFetchAPI(search);
    }, 300);

    return () => clearTimeout(timeout);
  }, [search]);

  return (
    <div style={{marginLeft:'4rem'}}>
      <h2 style={{margin:'10px 0px'}}>User List</h2>

      <input
        type="text"
        placeholder="Search User"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{width:'250px', padding:"5px", borderRadius:"8px",marginBottom:'5px'}}
      />

      {datas.length === 0 ? (
        <h3>No User Found</h3>
      ) : (
        datas.map((user) => (
          <ul key={user.id} style={{listStyleType:'none'}}>
            <li>
              {user.firstName} {user.lastName}
            </li>
          </ul>
        ))
      )}
      <div>
        <Link to="/">Return to Home Page</Link>
      </div>
    </div>
  );
}
export default UserSearch;
