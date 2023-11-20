import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
export default function SinglePlayer() {
  const [players, setPlayers] = useState({});
  const { id } = useParams();
  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        `https://fsa-puppy-bowl.herokuapp.com/api/2306-FTB-ET-WEB-FT/players/${id}`
      );
      const result = response.json();
      setPlayers(cleanPlayerData(data));
    }
    fetchData();
    console.log("Use Effect");
  }, []);
  function cleanPlayerData(data) {
    return {
      name: data.name,
      img: data.image,
      breed: data.breed,
      status: data.status,
    };
  }
  console.log(players);
  console.log("Id:", id);
  console.log("Page Loads");

  return (
    <div>
      <h1>{players.name}</h1>
      <img src={players.imageUrl} alt="" />
      <h3>{players.breed}</h3>
      <h3>{players.status}</h3>
      <ul>{players.name && players.imageUrl}</ul>
    </div>
  );
}
