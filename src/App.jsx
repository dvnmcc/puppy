import { useState } from "react";
import { Link } from "react-router-dom";
import "./App.css";
import SinglePlayer from "./components/SinglePlayer";
import AllPlayers from "./components/AllPlayers";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<AllPlayers />} />
        <Route path="/players/:id" element={<SinglePlayer />} />
      </Routes>
    </>
  );
}

export default App;
