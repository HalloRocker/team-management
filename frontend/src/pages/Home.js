import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="container" style={{ textAlign: "center" }}>
      <div style={logoWrapper}>
        <img
          src="/curseforge-logo.png"
          alt="CurseForge Logo"
          style={logoStyle}
        />
      </div>
      <h1 style={heading3D}>
  Welcome to <span style={highlight}>CurseForge</span>
</h1>
      <p style={{ fontSize: "1.2rem", marginBottom: "30px" }}>
        Unleash your team’s full potential with our powerful member management system.
      </p>
      <div style={{ display: "flex", justifyContent: "center", gap: "20px" }}>
        <Link to="/add">
          <button className="button-primary">Add Member</button>
        </Link>
        <Link to="/members">
          <button className="button-primary">View Members</button>
        </Link>
      </div>
    </div>
  );
};

const logoWrapper = {
  display: "flex",
  justifyContent: "center",
  marginBottom: "20px",
};

const logoStyle = {
  width: "150px",
  height: "150px",
  objectFit: "contain",
  maskImage: "linear-gradient(to bottom, black 70%, transparent)",
  WebkitMaskImage: "linear-gradient(to bottom, black 70%, transparent)",
};

const heading3D = {
  fontSize: "3rem",
  marginBottom: "10px",
  color: "#fff",
  textShadow: `
    1px 1px 0 #ccc,
    2px 2px 0 #bbb,
    3px 3px 0 #aaa,
    4px 4px 0 #999,
    5px 5px 0 #888
  `,
  transform: "translateY(-2px)",
  fontWeight: "bold",
  letterSpacing: "1px"
};
const highlight = {
  color: "orange",
  textShadow: `
    1px 1px 0 #f3c29f,
    2px 2px 0 #f0a84d,
    3px 3px 0 #df8704,
    4px 4px 0 #b56d02,
    5px 5px 0 #8b5501
  `
};

export default Home;
