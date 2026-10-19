import React, { useState, useEffect } from "react";

function UserForm({ addUser, updateUser, editUser }) {
  const [input, setInput] = useState({
    name: "",
    email: "",
    city: "",
    country: "",
  });

  useEffect(() => {
    if (editUser) {
      setInput(editUser);
    }
  }, [editUser]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput({
      ...input,
      [name]: value,
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (!input.name || !input.email || !input.city || !input.country) {
      alert("Please fill all fields");
      return;
    }
    if (editUser) {
      updateUser(input);
    } else {
      addUser(input);
    }
    setInput({
      name: "",
      email: "",
      city: "",
      country: "",
    });
  };

  return (
    <div>
      <h3>Form fields</h3>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          name="name"
          placeholder="Enter Name"
          value={input.name}
          onChange={handleChange}
          style={{ width: "250px", padding: "4px", borderRadius: "8px" }}
        />
        <br />
        <br />
        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          value={input.email}
          onChange={handleChange}
          style={{ width: "250px", padding: "4px", borderRadius: "8px" }}
        />
        <br />
        <br />
        <input
          type="text"
          name="city"
          placeholder="Enter City"
          value={input.city}
          onChange={handleChange}
          style={{ width: "250px", padding: "4px", borderRadius: "8px" }}
        />
        <br />
        <br />
        <input
          type="text"
          name="country"
          placeholder="Enter Country"
          value={input.country}
          onChange={handleChange}
          style={{ width: "250px", padding: "4px", borderRadius: "8px" }}
        />
        <button
          style={{
            padding: "4px",
            borderRadius: "8px",
            marginLeft: "5px",
            cursor: "pointer",
          }}
          type="submit"
        >
          {editUser ? "Update User" : "Add User"}
        </button>
      </form>
    </div>
  );
}

export default UserForm;