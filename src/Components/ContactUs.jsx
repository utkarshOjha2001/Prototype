import React from "react";
import brideLogo from "../assets/brides.jpeg";
import mapPic from "../assets/Map.png";

const ContactUs = () => {
  return (
    <>
      <div
        className="container"
        style={{
          paddingLeft: "8rem",
          paddingRight: "8rem",
          width: "100vw",
          height: "90vh",
          backgroundColor: "black",
          marginTop: "4%",
        }}
      >
        <div
          style={{
            width: "100%",
            height: "10vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "19px",
          }}
        >
          <h1 style={{ color: "#e3b857" }}>CONTACT US</h1>
        </div>
        <div
          className="get-in-touch"
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <div style={{marginTop:"4%"}} className="detailsBox">
            <h3 style={{ color: "#e3b857", fontSize: "22px" }}>Get in Touch</h3>
            <form style={{marginTop:"12%"}}>
                <p style={{marginBottom:"2%", color:"gray", fontSize:"14px"}}>Your name</p>
                <input style={{width:"350%", height:"5vh", textDecoration:"none", backgroundColor:"black", border:"1px solid white", borderColor:'1px solid white', marginBottom:"18px"}}></input>

                <p style={{marginBottom:"2%", color:"gray", fontSize:"14px"}}>Your email</p>
                <input style={{ marginBottom:"18px", width:"350%", height:"5vh", textDecoration:"none", backgroundColor:"black", border:"1px solid white", borderColor:'1px solid white'}}></input>

                <p style={{marginBottom:"2%", color:"gray", fontSize:"14px"}}>Subject</p>
                <input style={{ marginBottom:"18px", width:"350%", height:"5vh", textDecoration:"none", backgroundColor:"black", border:"1px solid white", borderColor:'1px solid white'}}></input>

                <p style={{marginBottom:"2%", color:"gray", fontSize:"14px"}}>Your message (optional)</p>
                <input style={{ marginBottom:"18px", width:"350%", height:"5vh", textDecoration:"none", backgroundColor:"black", border:"1px solid white", borderColor:'1px solid white', height:"30vh"}}></input>

                <div className = "submit-Button" style={{backgroundColor:"#13aff0", width:"90px", height:"40px", display:"flex", justifyContent:"center", alignItems:"center"}} onClick={()=>alert("Its a prototype !")}>
                    <p style={{color:"white", fontSize:"800"}}>SUBMIT</p>
                </div>
            </form>
          </div>
          <div
            className="mapView"
            style={{ width: "45%", height: "80vh", marginRight: "4%" }}
          >
            <img
              style={{ width: "100%", height: "100%", objectFit: "fill", marginTop:"8%" }}
              src={mapPic}
            />
          </div>
        </div>
        <div className="contact-section"></div>
      </div>
    </>
  );
};

export default ContactUs;
