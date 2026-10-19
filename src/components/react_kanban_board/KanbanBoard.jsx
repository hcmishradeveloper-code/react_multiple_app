import { useState } from "react";

function KanbanBoard({ datas }) {
  const [columns, setColumns] = useState(datas);
  const [newTask, setNewTask] = useState("");
  const [activeColumn, setActiveColumn] = useState("todo");
  const [draggedItem, setDraggedItem] = useState(null);

  // Add new task
  const addNewTask = () => {
    if (newTask.trim() === "") return;
    const updatedColumns = {
      ...columns,
      [activeColumn]: {
        ...columns[activeColumn],
        items: [
          ...columns[activeColumn].items,
          {
            id: Date.now().toString(),
            content: newTask,
          },
        ],
      },
    };

    setColumns(updatedColumns);
    setNewTask("");
  };

  // Remove task
  const removeTask = (columnId, taskId) => {
    const updatedColumns = {
      ...columns,
      [columnId]: {
        ...columns[columnId],
        items: columns[columnId].items.filter(
          (item) => item.id !== taskId
        ),
      },
    };

    setColumns(updatedColumns);
  };

  // Drag start
  const handleDragStart = (columnId, item) => {
    setDraggedItem({columnId, item});
  };

  // Drag over
  const handleDragOver = (e) => {
    e.preventDefault();
  };

  // Drop
  const handleDrop = (e, columnId) => {
    e.preventDefault();
    if (!draggedItem) return;
    const {columnId: sourceColumnId,item,} = draggedItem;
    if (sourceColumnId === columnId) {
      setDraggedItem(null);
      return;
    }
    const updatedColumns = {...columns,
      [sourceColumnId]: {
        ...columns[sourceColumnId],
        items: columns[sourceColumnId].items.filter(
          (i) => i.id !== item.id
        ),
      },

      [columnId]: {...columns[columnId],
        items: [...columns[columnId].items, item],
      },
    };

    setColumns(updatedColumns);
    setDraggedItem(null);
  };

  // Column colors
  const columnStyles = {
    todo: {
      header:"linear-gradient(to right, #2563eb, #60a5fa)",
      border: "#60a5fa",
    },
    InProgress: {
      header:"linear-gradient(to right, #ca8a04, #facc15)",
      border: "#facc15",
    },
    done: {
      header:"linear-gradient(to right, #16a34a, #4ade80)",
      border: "#4ade80",
    },
  };

  return (
    <div
      style={{
        padding: "24px",
        width: "100%",
        minHeight: "100vh",
        boxSizing: "border-box",
        background:"linear-gradient(to bottom, #18181b, #27272a)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          gap: "16px",
          width: "100%",
          maxWidth: "1152px",
        }}
      >
        {/* Heading */}
        <h1
          style={{
            fontSize: "38px",
            fontWeight: "700",
            marginBottom: "12px",
            marginTop: "20px",
            background:"linear-gradient(to right, #facc15, #f59e0b, #fb7185)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            textAlign: "center",
          }}
        >
          React Kanban Board
        </h1>
        {/* Add Task */}
        <div
          style={{
            marginBottom: "32px",
            display: "flex",
            width: "100%",
            maxWidth: "512px",
            boxShadow:"0 10px 15px -3px rgba(0,0,0,0.3)",
            borderRadius: "8px",
            overflow: "hidden",
          }}
        >
          <input
            type="text"
            value={newTask}
            placeholder="Add a new Task..."
            onChange={(e) =>setNewTask(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                addNewTask();
              }
            }}
            style={{
              flexGrow: 1,
              padding: "12px",
              backgroundColor: "#3f3f46",
              color: "white",
              border: "none",
              outline: "none",
              fontSize: "16px",
            }}
          />
          <select
            value={activeColumn}
            onChange={(e) =>setActiveColumn(e.target.value)}
            style={{
              padding: "12px",
              backgroundColor: "#3f3f46",
              color: "white",
              border: "1px solid #52525b",
              outline: "none",
              fontSize: "15px",
            }}
          >
            {Object.keys(columns).map((columnId) => (
                <option value={columnId} key={columnId} >
                {columns[columnId].name}
                </option>
              )
            )}
          </select>
          <button
            onClick={addNewTask}
            style={{
              padding: "12px 24px",
              background:"linear-gradient(to right, #ca8a04, #f59e0b)",
              color: "white",
              fontWeight: "500",
              fontSize: "16px",
              border: "none",
              cursor: "pointer",
            }}
          >
            Add
          </button>
        </div>
        {/* Columns */}
        <div
          style={{
            display: "flex",
            gap: "24px",
            overflowX: "auto",
            paddingBottom: "24px",
            width: "100%",
            alignItems: "flex-start",
          }}
        >
          {Object.keys(columns).map(
            (columnId) => (
              <div
                key={columnId}
                onDragOver={handleDragOver}
                onDrop={(e) =>handleDrop(e, columnId)}
                style={{
                  flexShrink: 0,
                  width: "320px",
                  backgroundColor: "#27272a",
                  borderRadius: "8px",
                  borderTop: "4px solid " + columnStyles[columnId].border,
                  boxShadow:"0 20px 25px -5px rgba(0,0,0,0.4)",
                  overflow: "hidden",
                }}
              >
                {/* Column Header */}
                <div
                  style={{
                    padding: "16px",
                    background: columnStyles[columnId].header,
                    color: "white",
                    fontWeight: "700",
                    fontSize: "18px",
                    borderRadius:"4px 4px 0 0",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <span>
                    {columns[columnId].name}
                    <span
                      style={{
                        marginLeft: "8px",
                        padding: "4px 8px",
                        backgroundColor:"rgba(39,39,42,0.4)",
                        borderRadius: "9999px",
                        fontSize: "14px",
                      }}
                    >
                      {
                        columns[columnId].items.length
                      }
                    </span>
                  </span>
                </div>
                {/* Column Body */}
                <div
                  style={{
                    padding: "12px",
                    minHeight: "256px",
                    boxSizing: "border-box",
                  }}
                >
                  {columns[columnId].items
                    .length === 0 ? (
                    <div
                      style={{
                        textAlign: "center",
                        padding: "40px 0",
                        color: "#71717a",
                        fontStyle: "italic",
                        fontSize: "14px",
                      }}
                    >
                      Drop tasks here
                    </div>
                  ) : (
                    columns[columnId].items.map(
                      (item) => (
                        <div
                          key={item.id}
                          draggable
                          onDragStart={() =>handleDragStart(columnId, item)}
                          style={{
                            padding: "16px",
                            marginBottom: "12px",
                            backgroundColor:"#3f3f46",
                            color: "white",
                            borderRadius: "8px",
                            boxShadow:"0 4px 6px rgba(0,0,0,0.3)",
                            cursor: "grab",
                            display: "flex",
                            alignItems: "center",
                            justifyContent:"space-between",
                            transition:"all 0.2s ease",
                          }}
                        >
                          {/* Task Content */}
                          <span
                            style={{
                              flex: 1,
                              marginRight: "10px",
                              wordBreak:"break-word",
                              fontSize: "15px",
                            }}
                          >
                            {item.content}
                          </span>
                          {/* Delete Button */}
                          <button
                            onClick={() => removeTask(columnId, item.id)}
                            style={{
                              color: "#a1a1aa",
                              backgroundColor:"transparent",
                              border: "none",
                              width: "30px",
                              height: "30px",
                              display: "flex",
                              alignItems: "center",
                              justifyContent:"center",
                              borderRadius: "50%",
                              cursor: "pointer",
                              fontSize: "18px",
                            }}
                          >
                            x
                          </button>
                        </div>
                      )))}
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
export default KanbanBoard;