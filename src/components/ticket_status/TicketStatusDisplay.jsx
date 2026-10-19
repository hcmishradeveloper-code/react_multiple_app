import React, { useState } from "react";
import { Link } from "react-router-dom";

const ticketData = [
  {
    id: 1,
    title: "Login Issue",
    description: "Unable to login",
    status: "Open",
    priority: "High",
    createdBy: "Harish",
  },
  {
    id: 2,
    title: "Payment Failed",
    description: "Payment not processed",
    status: "Closed",
    priority: "Medium",
    createdBy: "John",
  },

  {
    id: 3,
    title: "Registation Issue",
    description: "Duplicate Registation ",
    status: "In Progress",
    priority: "High",
    createdBy: "Rajeev",
  },
];

function TicketStatusDisplay() {
  const [tickets, setTickets] = useState(ticketData);
  const [activeStatus, setActiveStatus] = useState("All");
  const [expendedTicketId, setExpendedTicketId] = useState(null);

  const filteredTicket =
    activeStatus === "All"
      ? tickets
      : tickets.filter((ticket) => ticket.status === activeStatus);

  const handleTabChanges = (status) => {
    setActiveStatus(status);
  };

  const toggleTicket = (id) => {
    if (expendedTicketId === id) {
      setExpendedTicketId(null);
    } else {
      setExpendedTicketId(id);
    }
  };

  console.log("EXP:", expendedTicketId);

  return (
    <div style={{marginLeft:'4rem'}}>
      <h2 style={{margin:'10px 0px'}}>Tickets Status</h2>
      <div>
        <button style={{padding:"2px 10px", borderRadius:'6px'}} onClick={() => handleTabChanges("All")}>All</button>
        <button style={{padding:"2px 10px", borderRadius:'6px'}} onClick={() => handleTabChanges("Open")}>Open</button>
        <button style={{padding:"2px 10px", borderRadius:'6px'}} onClick={() => handleTabChanges("In Progress")}>
          In-Progress
        </button>
        <button style={{padding:"2px 10px", borderRadius:'6px'}} onClick={() => handleTabChanges("Closed")}>Closed</button>
      </div>
      <div>
        {filteredTicket.map((ticket) => (
          <ul
            key={ticket.id}
            onClick={() => toggleTicket(ticket.id)}
            style={{ listStyleType: "none" }}
          >
            <li>{ticket.title}</li>
            {expendedTicketId === ticket.id && (
              <span>
                <li>{ticket.description}</li>
                <li>{ticket.priority}</li>
              </span>
            )}
            <li>{ticket.status}</li>
          </ul>
        ))}
      </div>
      <Link className="link_click" to="/">Return to Home</Link>
    </div>
  );
}
export default TicketStatusDisplay;
