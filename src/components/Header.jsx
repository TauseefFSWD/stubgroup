import React from "react";
import image from "../assets/stubgroup-logo.png";
//I have used inline CSS here
function Header() {
  return (
    <header
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "20px",
        backgroundColor: "#fff",
      }}
    >
      <div style={{ flexGrow: 1, textAlign: "left" }}>
        {" "}
        {}
        <img
          src={image}
          alt="StubGroup"
          style={{ width: "200px", height: "auto" }}
        />
      </div>
      <div style={{ flexGrow: 1, textAlign: "right" }}>
        {" "}
        {}
        <p style={{ fontSize: "1.5rem", margin: 0 }}>(888) 545-8404</p>
      </div>
    </header>
  );
}

export default Header;
