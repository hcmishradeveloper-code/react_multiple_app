import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const userData = [
  {
    id: 1,
    name: "Harish Mishra",
    email: "haris@gmail.com",
    role: "frontend",
    company: "globalLogic",
  },
  {
    id: 2,
    name: "Alankrita Mishra",
    email: "alankrit@gmail.com",
    role: "student",
    company: "IP Extension",
  },
  {
    id: 3,
    name: "Anushree Mishra",
    email: "anushree@gmail.com",
    role: "Housewife",
    company: "MayurVihar",
  },
  {
    id: 4,
    name: "Rajesh Gupta",
    email: "rajesh@email.com",
    role: "engineer",
    company: "Railway",
  },
  {
    id: 5,
    name: "Harish Mishra",
    email: "haris@gmail.com",
    role: "frontend",
    company: "globalLogic",
  },
  {
    id: 6,
    name: "Kapish satti",
    email: "kapish@testmail.com",
    role: "AC Techenique",
    company: "Uflex",
  },
];

function TableBackgroundChange() {
  const [datas, setDatas] = useState([]);
  const [showCard, setShowCard] = useState(false);
  const [cardItems, setCardItems] = useState(null);
  const [selectedRowId, setSelectedRowId] = useState(null);
  const [redRows, setRedRows] = useState([]);

  useEffect(() => {
    setDatas(userData);
  }, []);

  const rowHandler = (id) => {
    const selectedRow = datas.find((data) => data.id === id);

    setCardItems(selectedRow);
    setShowCard(true);
  };

  const cardCloseHandler = () => {
    setShowCard(false);

    setRedRows((prev) => {
      if (prev.includes(cardItems.id)) {
        return prev;
      }

      return [...prev, cardItems.id];
    });
    setCardItems(null);
  };

  console.log("Red:", redRows);

  return (
    <div style={{marginLeft:'4rem', width:'900px'}}>
      <h2 style={{margin:'10px 0px'}}> USER TABLE</h2>
      <table border="1" cellSpacing="0px" cellPadding="5px" width="100%">
        <thead>
          <tr>
            <th style={{padding:'5px 0px'}}>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Company</th>
          </tr>
        </thead>
        <tbody>
          {datas.map((data) => (
            <tr
              key={data.id}
              onClick={() => {
                if (!redRows.includes(data.id)) {
                  rowHandler(data.id);
                }
              }}
              style={{
                backgroundColor: redRows.includes(data.id) ? "red" : "",
                color: redRows.includes(data.id) ? "white" : "",
                cursor: redRows.includes(data.id) ? "not-allowed" : "pointer",
              }}
            >
              <td style={{padding:"5px 10px"}}>{data.id}</td>
              <td style={{padding:"5px 10px"}}>{data.name}</td>
              <td style={{padding:"5px 10px"}}>{data.email}</td>
              <td style={{padding:"5px 10px"}}>{data.role}</td>
              <td style={{padding:"5px 10px"}}>{data.company}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div style={{ marginTop: "20px" }}>
        {showCard && (
          <div
            style={{
              border: "1px solid blue",
              width: "250px",
              borderRadius: "12px",
              margin: "0px",
              padding: "10px",
            }}
          >
            <p style={{ display: "flex", justifyContent: "space-between" }}>
              <span>User Details Card</span>
              <button onClick={cardCloseHandler}>Close</button>{" "}
            </p>
            <p>Name: {cardItems.name} </p>
            <p> Email: {cardItems.email}</p>
            <p> Role: {cardItems.role}</p>
          </div>
        )}
      </div>
      <Link to="/">Move to Home </Link>
    </div>
  );
}
export default TableBackgroundChange;
