import { useState } from "react";
import { Link } from "react-router-dom";

function DynamicInput() {
  const [inputs, setInputs] = useState([{ id: 1, name: "", email: "" }]);
  const [submittedData, setSubmittedData] = useState([]);

  const inputFieldHandler = () => {
    setInputs([
      ...inputs,
      {
        id: inputs.length + 1,
        name: "",
        email: "",
      },
    ]);
  };

  const deleteHandler = (id) => {
    const deleteResult = inputs.filter((input) => input.id !== id);
    setInputs(deleteResult);
  };

  const changeHandler = (id, field, value) => {
    setInputs((prevInputs) =>
      prevInputs.map((input) =>
        input.id === id ? { ...input, [field]: value } : input
      )
    );
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setSubmittedData(inputs);

    // Clear form
    setInputs([
      {
        id: 1,
        name: "",
        email: "",
      },
    ]);
  };

  console.log(inputs);

  return (
    <div style={{marginLeft:'4rem'}}>
      <h2>Dynamic Input fields</h2>
      <form onSubmit={submitHandler}>
        {inputs?.map((input) => (
          <div key={input.id}>
            <input
              type="text"
              placeholder="Name"
              value={input.name}
              onChange={(e) => changeHandler(input.id, "name", e.target.value)}
              style={{
                width: "200px",
                padding: "5px",
                borderRadius: "12px",
                margin: "5px",
              }}
            />
            <input
              type="email"
              value={input.email}
              onChange={(e) => changeHandler(input.id, "email", e.target.value)}
              placeholder="Email"
              style={{
                width: "200px",
                padding: "5px",
                borderRadius: "12px",
                margin: "5px",
              }}
            />
            <button
              type="button"
              onClick={() => deleteHandler(input.id)}
              style={{ padding: "5px", borderRadius: "12px" }}
            >
              Delete
            </button>
          </div>
        ))}
        <button
          type="button"
          onClick={inputFieldHandler}
          style={{ margin: "10px 0px", padding: "5px", borderRadius: "12px" }}
        >
          Add Field
        </button>
        <button
          type="submit"
          style={{
            margin: "10px",
            padding: "5px",
            borderRadius: "12px",
          }}
        >
          Submit
        </button>
      </form>

      {/* Display submitted data */}
      <div>
        <h2>Submitted Data</h2>

        {submittedData.map((input) => (
          <ul key={input.id} style={{ padding: "0px", margin: "0px" }}>
            <li>Id: {input.id}</li>
            <li>Name: {input.name}</li>
            <li>Email: {input.email}</li>
            <hr />
          </ul>
        ))}
      </div>
      <div>
        <Link to="/">Return to Home Page</Link>
      </div>
    </div>
  );
}

export default DynamicInput;