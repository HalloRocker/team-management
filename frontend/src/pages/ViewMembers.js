import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const ViewMembers = () => {
  const [members, setMembers] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/members")
      .then(res => setMembers(res.data))
      .catch(err => alert("Failed to load members"));
  }, []);

  return (
    <div className="container">
      <h2 style={{ textAlign: "center", marginBottom: "30px" }}>Team Members</h2>
      <div className="card-grid">
        {members.map((member) => (
          <div key={member._id} className="card">
            <img
              src={`http://localhost:5000/uploads/${member.image}`}
              alt={member.name}
            />
            <h3>{member.name}</h3>
            <p style={{ margin: "6px 0" }}>{member.role}</p>
            <Link to={`/members/${member._id}`}>
              <button className="button-primary">View Details</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ViewMembers;
