import React from "react";
import brideLogo from "../assets/brides.jpeg";
const HomeView = () => {
  return (
    <>
      <div
        style={{ backgroundColor: "white", width: "100vw", height: "1px" }}
      />
      <div
        className="container"
        style={{
          paddingLeft: "8rem",
          paddingRight: "8rem",
          width: "100vw",
          height: "90vh",
          backgroundColor: "black",
        }}
      >
        <div
          style={{
            display: "flex",
            paddingTop: "5%",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div
            className="Content"
            style={{
              width: "45%",
              height: "35vh",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <h1 style={{ color: "#e3b857" }}>Welcome to Noor Bridal</h1>
            <p>
              Noor Bridal priority is to give you Quality Designer wear, high on
              style, without adding weight on your wallet! We want you to look
              Royal , amazing and also feel special—throughout the entire design
              process, and on your special day . Shop our collection of premium
              Bridal Lehengas ,Non bridal Lehengas , Gowns and Sarees…
            </p>
            <div
              style={{
                backgroundColor: "#e3b857",
                height: "40px",
                width: "13rem",
                display:"flex",
                justifyContent:"center",
                alignItems:"center",
                borderRadius:"4px",
                fontWeight:"bold"
              }}
            >
              Book An Appointment
            </div>
          </div>
          <div
            className="brides-image"
            style={{
              width: "53%",
              height: "85vh",
              paddingRight: "40px",
              paddingLeft: "40px",
            }}
          >
            <img
              style={{ width: "100%", height: "100%", objectFit: "fill" }}
              src={brideLogo}
              alt="Brides-image"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeView;
