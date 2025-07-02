import React from "react";
import { useNavigate } from "react-router-dom";

function Table({ tableData, handleDelete, setEditIdx, searchTerm, setSearchTerm }) {
  const navigate = useNavigate();

  const handleEdit = (idx) => {
    setEditIdx(idx);
    navigate("/form");
  };

  return (
    <div>
      <h1 className="text-3xl font-bold text-center mt-10">Task Manager</h1>
      <div className="flex justify-between items-center w-6/12 mt-10 ml-96">
        <button
          className="bg-green-600 text-white px-4 py-2 rounded"
          onClick={() => {
            setEditIdx(null);
            navigate("/form");
          }}
        >
          + Add Task
        </button>
        <input
          type="text"
          placeholder="Search by title..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="ml-4 px-3 py-2 border rounded w-1/2"
        />
      </div>
      <table className="w-6/12 border mt-4 ml-96">
        <thead>
          <tr className="bg-gray-100">
            <th className="border p-2">Title</th>
            <th className="border p-2">Description</th>
            <th className="border p-2">Status</th>
            <th className="border p-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {tableData.length > 0 ? (
            tableData.map((data, idx) => (
              <tr key={idx}>
                <td className="border border-gray-300 px-4 py-2">{data.title}</td>
                <td className="border border-gray-300 px-4 py-2">{data.description}</td>
                <td className="border border-gray-300 px-4 py-2">{data.status}</td>
                <td className="border border-blue-300 px-4 py-2">
                  <button
                    className="bg-blue-500 text-white px-4 py-2 rounded"
                    onClick={() => handleEdit(idx)}
                  >
                    Edit
                  </button>
                  <button
                    className="ml-2 bg-red-500 text-white px-4 py-2 rounded"
                    onClick={() => handleDelete(idx)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4" className="text-center py-4 text-gray-500">
                No tasks found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default Table;