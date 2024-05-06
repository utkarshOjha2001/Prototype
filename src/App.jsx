import { useState } from "react";
import "./App.css";
import NavBar from "./Components/NavBar";
import HomeView from "./Components/HomeView";
import Collections from "./Components/Collections";
import ContactUs from "./Components/ContactUs";

function App() {
  return (
    <>
      <NavBar />
      <HomeView />
      <Collections />
      <ContactUs />
    </>
  );
}

export default App;
