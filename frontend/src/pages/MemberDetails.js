import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const MemberDetails = () => {
  const { id } = useParams();
  const [member, setMember] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:5000/api/members/${id}`)
      .then(res => setMember(res.data))
      .catch(() => alert("Error loading member"));
  }, [id]);

  if (!member) return <div style={{ textAlign: "center" }}>Loading...</div>;

  return (
    <div className="container" style={{
      backgroundColor: "#fff",
      borderRadius: "10px",
      boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
      padding: "30px",
      textAlign: "center"
    }}>
      <img
        src={`http://localhost:5000/uploads/${member.image}`}
        alt={member.name}
        style={{
          width: "100%",
          height: "300px",
          objectFit: "cover",
          borderRadius: "10px",
          marginBottom: "20px"
        }}
      />
      <h2>{member.name}</h2>
      <p><strong>Role:</strong> {member.role}</p>
      <p><strong>Email:</strong> {member.email}</p>
    </div>
  );
};

export default MemberDetails;
