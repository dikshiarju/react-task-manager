import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Form({ onSubmit, taskToEdit, editIdx, setEditIdx }) {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    status: "Pending",
  });

  const navigate = useNavigate();

  useEffect(() => {
    if (taskToEdit) {
      setFormData(taskToEdit);
    }
  }, [taskToEdit]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData, editIdx);
    setFormData({ title: "", description: "", status: "Pending" });
    setEditIdx(null);
    navigate("/");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-4/12 mx-auto mt-20 border p-6 rounded shadow"
    >
      <h2 className="text-xl font-bold mb-4">
        {taskToEdit ? "Edit Task" : "Add Task"}
      </h2>
      <input
        type="text"
        name="title"
        placeholder="Title"
        value={formData.title}
        onChange={handleChange}
        className="w-full mb-4 p-2 border rounded"
        required
      />
      <textarea
        name="description"
        placeholder="Description"
        value={formData.description}
        onChange={handleChange}
        className="w-full mb-4 p-2 border rounded"
        required
      ></textarea>
      <select
        name="status"
        value={formData.status}
        onChange={handleChange}
        className="w-full mb-4 p-2 border rounded"
      >
        <option value="Pending">Pending</option>
        <option value="In Progress">In Progress</option>
        <option value="Completed">Completed</option>
      </select>
      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        Save
      </button>
    </form>
  );
}

export default Form;