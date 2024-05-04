import React from "react";
import brideLogo from "../assets/brides.jpeg";
import bride1 from "../assets/bride1.jpeg";
import bride2 from "../assets/bride2.jpeg";
const Collections = () => {
  return (
    <>
      <div
        className="Container-collections"
        style={{
          backgroundColor: "black",
          width: "100vw",
          height: "100vh",
        }}
      >
        <div
          style={{
            width: "100vw",
            height: "10vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "19px",
            marginTop: "3%",
          }}
        >
          <h1 style={{ color: "#e3b857" }}>OUR COLLECTION</h1>
        </div>
        <div className="imageContainer" style={{paddingLeft:"8rem", paddingRight:"8rem",display:"flex", flexDirection:"row", justifyContent:"center"}}>
            <img style={{width:"45%", objectFit:"fill",paddingRight:"10px"}} src={bride1} />
            <img style={{width:"45%", objectFit:"fill", paddingLeft:"10px"}} src={bride2} />
        </div>
      </div>
    </>
  );
};

export default Collections;
