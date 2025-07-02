import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Table from "./components/Table";
import FormPage from "./components/Form";

function App() {
  const [tableData, setTableData] = useState([]);
  const [editIdx, setEditIdx] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const handleAddOrUpdate = (formData, idx = null) => {
    if (idx === null) {
      setTableData([...tableData, formData]);
    } else {
      const updated = [...tableData];
      updated[idx] = formData;
      setTableData(updated);
    }
  };

  const handleDelete = (idx) => {
    const updated = tableData.filter((_, i) => i !== idx);
    setTableData(updated);
  };

  const filteredData = tableData.filter(task =>
    task.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Table
              tableData={filteredData}
              handleDelete={handleDelete}
              setEditIdx={setEditIdx}
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
            />
          }
        />
        <Route
          path="/form"
          element={
            <FormPage
              onSubmit={handleAddOrUpdate}
              taskToEdit={editIdx !== null ? tableData[editIdx] : null}
              editIdx={editIdx}
              setEditIdx={setEditIdx}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
