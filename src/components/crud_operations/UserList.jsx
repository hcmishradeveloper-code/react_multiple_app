import React from "react";

function UserList({ users, deleteUser, editUserHandler }) {
  return (
    <div style={{ marginBottom: "0.5rem", marginTop: "1rem" }}>
      <table border="1" cellPadding="5px" cellSpacing="0px" width="100%">
        <thead>
          <tr>
            <th style={{padding:"5px 0px"}}>ID</th>
            <th style={{padding:"5px 0px"}}>Name</th>
            <th style={{padding:"5px 0px"}}>Email</th>
            <th style={{padding:"5px 0px"}}>City</th>
            <th style={{padding:"5px 0px"}}>Country</th>
            <th style={{padding:"5px 0px"}}>Action</th>
          </tr>
        </thead>

        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td style={{padding:"5px 10px"}}>{user.id}</td>
              <td style={{padding:"5px 10px"}}>{user.name}</td>
              <td style={{padding:"5px 10px"}}>{user.email}</td>
              <td style={{padding:"5px 10px"}}>{user.city}</td>
              <td style={{padding:"5px 10px"}}>{user.country}</td>
              <td style={{padding:"5px 10px"}}>
                <button onClick={() => editUserHandler(user)}>Edit</button>
                <button
                  onClick={() => deleteUser(user.id)}
                  style={{ marginLeft: "10px" }}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default UserList;
