import React from "react";
import weddingLogo from "../assets/weddingLogo.png"; // Import the image
import searchIcon from "../assets/search.png";
import instaLogo from "../assets/instagram.png";

const NavBar = () => {
  return (
    <>
    <div style={{backgroundColor:"white", width:"100vw", height:"18px"}}></div>
      <nav
        style={{
          width: "100vw",
          height: "10vh",
          backgroundColor: "black",
          display: "flex",
          paddingRight: "8rem",
          paddingLeft: "8rem",
          justifyContent: "space-between",
          alignItems: "center",
          textAlign:"center"
        }}
      >
        <div style={{backgroundRepeat:"no-repeat", backgroundSize:"300px 100px"}}>
        <img style={{height:"70px", width:"70px", objectFit:"fill"}} src={weddingLogo} alt="Wedding Logo" />
        </div>
        <div style={{ width: "50vw" }}>
          <ul
            style={{
              listStyleType: "none",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <li style={{ textDecoration: "none" }}>Home</li>
            <li>About us</li>
            <li>Book an Appointment</li>
            <li>Contact Us</li>
            <li>Our Collections</li>
            <li>
              <img style={{width:"25px", height:"25px"}} src={searchIcon} />
            </li>
            <li>
            <img style={{width:"25px", height:"25px"}} src={instaLogo} />
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
