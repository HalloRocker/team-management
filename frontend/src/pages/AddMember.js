import React, { useState } from "react";
import axios from "axios";

const AddMember = () => {
  const [formData, setFormData] = useState({
    name: "",
    role: "",
    email: "",
    image: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: name === "image" ? files[0] : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = new FormData();
      Object.entries(formData).forEach(([key, val]) => data.append(key, val));

      await axios.post("http://localhost:5000/api/members", data);
      alert("Member added successfully!");

      setFormData({ name: "", role: "", email: "", image: null });
    } catch (err) {
      alert("Error adding member.");
    }
  };

  return (
    <div className="container">
      <h2 style={{ textAlign: "center", marginBottom: "30px" }}>Add New Team Member</h2>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <FormInput label="Name" name="name" value={formData.name} onChange={handleChange} />
        <FormInput label="Role" name="role" value={formData.role} onChange={handleChange} />
        <FormInput label="Email" name="email" type="email" value={formData.email} onChange={handleChange} />
        <div style={{ marginBottom: "15px" }}>
          <label>Upload Image:</label><br />
          <input name="image" type="file" accept="image/*" onChange={handleChange} required />
        </div>
        <button type="submit" className="button-primary">Add Member</button>
      </form>
    </div>
  );
};

const FormInput = ({ label, name, type = "text", value, onChange }) => (
  <div style={{ marginBottom: "15px" }}>
    <label>{label}:</label><br />
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      required
      style={{ width: "100%", padding: "10px", borderRadius: "4px", border: "1px solid #ccc" }}
    />
  </div>
);

export default AddMember;
