import React, { useState } from "react";
import UserForm from "./UserForm";
import UserList from "./UserList";
import { Link } from "react-router-dom";

function CRUDMain() {
  const [editUser, setEditUser] = useState(null);
  const [users, setUsers] = useState([
    {
      id: 1,
      name: "Harish",
      email: "harish@gmail.com",
      city: "Delhi",
      country: "India",
    },
    {
      id: 2,
      name: "John",
      email: "john@gmail.com",
      city: "New York",
      country: "USA",
    },
    {
      id: 3,
      name: "Alankrita",
      email: "alankrita@gmail.com",
      city: "Pa",
      country: "USA",
    },
  ]);

  const addUser = (user) => {
    setUsers([
      ...users,
      {
        id: users.length+1,
        ...user,
      },
    ]);
  };

  const editUserHandler = (user) => {
    setEditUser(user);
  };

  const deleteUser = (id) => {
    const deleteData = users.filter((user) => user.id !== id);
    setUsers(deleteData);
  };

  const updateUser = (updatedUser) => {
    const updatedUsers = users.map((user) =>
      user.id === updatedUser.id ? updatedUser : user
    );
    setUsers(updatedUsers);
    setEditUser(null);
  };

  return (
    <div style={{ width: "70%", margin: "20px 4rem" }}>
      <h2>This is the Main Component</h2>
      <UserForm addUser={addUser} editUser={editUser} updateUser={updateUser} />
      <UserList
        users={users}
        editUserHandler={editUserHandler}
        deleteUser={deleteUser}
      />

      <div>
        <Link to="/"> Return to Home page</Link>
      </div>
    </div>
  );
}
export default CRUDMain;
