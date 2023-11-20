import React from "react";

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function AllPlayers() {
  const [players, setPlayers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          "https://fsa-puppy-bowl.herokuapp.com/api/2308-ftb-et-web-pt/players"
        );

        const result = await response.json();
        setPlayers(data);
        console.log(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData();
  }, []);
  console.log(players);
  return (
    <>
      {playesr.map((p, index) => (
        <div
          key={index}
          className="puppies"
          onClick={() => navigate(`/${p.id}`)}
        >
          <h1>{p.name}</h1>
          <img src={p.imageUrl} alt="" />
        </div>
      ))}
    </>
  );
}
